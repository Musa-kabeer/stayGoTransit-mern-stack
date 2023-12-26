import { NextFunction, Request, Response } from 'express';
import cloudinary from 'cloudinary';
import { promises as fs } from 'fs';
import { AppError } from '../utils/errorHandler';
import { Train } from '../models/train.model';

// Get  all hotels
export const getAllTrain = async (
     req: Request,
     res: Response,
     next: NextFunction
) => {
     try {
          const trains = await Train.find({}).select(
               '-__v -createdAt -updatedAt -id'
          );

          res.status(200).json({
               status: 'success',
               trains,
          });
     } catch (err: any) {
          return next(new AppError(err.message, 500));
     }
};

// Create hotel
export const createTrain = async (
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

               const train = await Train.create({
                    ...req.body,
                    location: req.body.location.toLowerCase(),
                    image: response.secure_url /* or response.url */,
               });

               res.status(201).json({
                    status: 'success',
                    train,
               });
          }
     } catch (err: any) {
          return next(new AppError(err.message, 500));
     }
};
