import { NextFunction, Request, Response } from 'express';
import { AppError } from '../utils/errorHandler';

export const ErrorMiddleware = (
     err: any,
     req: Request,
     res: Response,
     next: NextFunction
) => {
     // Default Error message
     err.statusCode = err.statusCode || 500;
     err.message = err.message || 'Internal Server error';

     console.log(err);

     if (process.env.NODE_ENV === 'development') {
          return res.status(err.statusCode).json({
               success: 'fail',
               message: err.message,
          });
     }

     if (err.message.contains)
          if (err.name === 'castError') {
               // MONGODB CAST ERROR
               console.log(err);
               return new AppError('', 400);
          }

     // DUPLICATE KEY ERROR
     if (err.code === '11000') {
          console.log(err);

          return new AppError('', 400);
     }
     // JWT ERROR
     if (err.name === 'JsonWebTokenError') {
          console.log(err);

          return new AppError('', 400);
     }

     // JWT EXPIRED ERROR
     if (err === 'malformed') {
          console.log(err);

          return new AppError('', 400);
     }

     res.status(err.statusCode).json({
          success: 'fail',
          message: err.message,
     });
};
