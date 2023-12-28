import { NextFunction, Request, Response } from 'express';
import cloudinary from 'cloudinary';
import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';

import { AppError } from '../utils/errorHandler';
import { Hotel } from '../models/hotel.model';

// Get  all hotels
export const getAllHotels = async (
     req: Request,
     res: Response,
     next: NextFunction
) => {
     try {
          const hotels = await Hotel.find({}).select(
               '-__v -createdAt -updatedAt -id'
          );

          res.status(200).json({
               status: 'success',
               hotels,
          });
     } catch (err: any) {
          return next(new AppError(err.message, 500));
     }
};

// Create hotel
export const createHotel = async (
     req: Request,
     res: Response,
     next: NextFunction
) => {
     try {
          if (req.file) {
               const response = await cloudinary.v2.uploader.upload(
                    req.file.path
               );

               await fs.unlink(req.file.path);

               const hotel = await Hotel.create({
                    ...req.body,
                    location: req.body.location.toLowerCase(),
                    image: response.secure_url,
                    uniqueId: uuidv4(),
               });

               res.status(201).json({
                    status: 'success',
                    hotel,
               });
          }
     } catch (err: any) {
          return next(new AppError(err.message, 500));
     }
};

// Get best hotel
// export const getBestHotel = async (
//      req: Request,
//      res: Response,
//      next: NextFunction
// ) => {
//      try {
//           const hotels = await Hotel.find({}).select(
//                '-__v -createdAt -updatedAt -id'
//           );

//           res.status(200).json({
//                status: 'success',
//                hotels,
//           });
//      } catch (err: any) {
//           return next(new AppError(err.message, 500));
//      }
// };
