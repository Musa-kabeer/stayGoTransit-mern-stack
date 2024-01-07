import { NextFunction, Request, Response } from 'express';
import cloudinary, { UploadApiResponse } from 'cloudinary';
import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';

import { AppError } from '../utils/errorHandler';
import { Room } from '../models/room.model';
import mongoose from 'mongoose';

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
                    {
                         hotelName: {
                              $regex: new RegExp(hotelName as string, 'i'), // making use of type assertion, to tell typescript that i am actually parsing a string
                         },
                    },

                    { town: { $regex: new RegExp(town as string, 'i') } }, // making use of type assertion, to tell typescript that i am actually parsing a string

                    {
                         uniqueId: {
                              $regex: new RegExp(uniqueId as string, 'i'), // making use of type assertion, to tell typescript that i am actually parsing a string
                         },
                    },

                    { state: { $regex: new RegExp(state as string, 'i') } }, // making use of type assertion, to tell typescript that i am actually parsing a string
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
               let response: UploadApiResponse | undefined = undefined;

               const images = await Promise.all(
                    (req.files as Express.Multer.File[]).map(async (file) => {
                         try {
                              response = await cloudinary.v2.uploader.upload(
                                   file.path
                              );

                              await fs.unlink(file.path);

                              return response.url;
                         } catch (err: any) {
                              if (response && response.public_id) {
                                   await cloudinary.v2.uploader.destroy(
                                        response.public_id
                                   );
                              }

                              console.error(
                                   'Error uploading file to Cloudinary:'
                              );

                              throw new Error(err); // Rethrow or handle the error further
                         }
                    })
               );

               console.log(response);

               const room = await Room.create({
                    ...req.body,
                    images,
                    roomId: uuidv4(),
                    location: req.body.location,
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
