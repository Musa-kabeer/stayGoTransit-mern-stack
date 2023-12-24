import { NextFunction, Request, Response } from 'express';
import cloudinary from 'cloudinary';
import { promises as fs } from 'fs';
import { AppError } from '../utils/errorHandler';
import { Car } from '../models/car.model';

// Get  all hotels
export const getAllCar = async (
     req: Request,
     res: Response,
     next: NextFunction
) => {
     try {
          const cars = await Car.find({}).select(
               '-__v -createdAt -updatedAt -id'
          );

          res.status(200).json({
               status: 'success',
               cars,
          });
     } catch (err: any) {
          return next(new AppError(err.message, 500));
     }
};

// Create hotel
export const createCar = async (
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

               const car = await Car.create({
                    ...req.body,
                    location: req.body.location.toLowerCase(),
                    image: response.secure_url /* or response.url */,
               });

               res.status(201).json({
                    status: 'success',
                    car,
               });
          }
     } catch (err: any) {
          return next(new AppError(err.message, 500));
     }
};
