import { NextFunction, Request, Response } from 'express';
import cloudinary from 'cloudinary';
import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';

import { AppError } from '../utils/errorHandler';
import { Room } from '../models/room.model';
import mongoose from 'mongoose';

interface File {
     fieldname: string;
     originalname: string;
     encoding: string;
     mimetype: string;
     destination: string;
     filename: string;
     path: string;
     size: number;
}

// Get  all hotels
export const getAllRoom = async (
     req: Request,
     res: Response,
     next: NextFunction
) => {
     try {
          const { hotelName, town, uniqueId, state } = req.query;

          let query = Room.find({
               $or: [
                    { hotelName: { $regex: new RegExp(hotelName, 'i') } },
                    { town: { $regex: new RegExp(town, 'i') } },
                    { uniqueId: { $regex: new RegExp(uniqueId, 'i') } },
                    { state: { $regex: new RegExp(state, 'i') } },
               ],
          });

          const rooms = await query
               .sort('-price')
               .select('-__v -createdAt -updatedAt');

          res.status(200).json({
               status: 'success',
               rooms,
          });
     } catch (err: any) {
          return next(new AppError(err.message, 500));
     }
};

// Create hotel
export const createRoom = async (
     req: Request,
     res: Response,
     next: NextFunction
) => {
     try {
          if (req.files) {
               const images = await Promise.all(
                    req.files.map(async (file: File) => {
                         try {
                              const response =
                                   await cloudinary.v2.uploader.upload(
                                        file.path
                                   );

                              await fs.unlink(file.path);

                              return response.url;
                         } catch (err: any) {
                              console.error(
                                   'Error deleting file from Cloudinary:'
                              );

                              throw new AppError(err, 500);
                         }
                    })
               );

               const room = await Room.create({
                    ...req.body,
                    images,
                    roomId: uuidv4(),
                    location: {
                         type: {
                              type: 'Point',
                         },
                         coordinates: [
                              mongoose.Types.Decimal128.fromString(
                                   req.body.location[0]
                              ),
                              mongoose.Types.Decimal128.fromString(
                                   req.body.location[1]
                              ),
                         ],
                    },
               });

               res.status(201).json({
                    status: 'success',
                    room,
               });
          }
     } catch (err: any) {
          return next(new AppError(err, 500));
     }
};

export const getRoom = async (
     req: Request,
     res: Response,
     next: NextFunction
) => {
     try {
          const room = await Room.findOne({ roomId: req.params.id }).select(
               '-__v -createdAt -updatedAt'
          );

          res.status(200).json({
               status: 'success',
               room,
          });
     } catch (err: any) {
          return next(new AppError(err.message, 500));
     }
};
