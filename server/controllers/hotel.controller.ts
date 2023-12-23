import { NextFunction, Request, Response } from 'express';
import { AppError } from '../utils/errorHandler';

export const getAllHotels = async (
     req: Request,
     res: Response,
     next: NextFunction
) => {
     try {
     } catch (err: any) {
          return next(new AppError(err.message, 500));
     }
};
