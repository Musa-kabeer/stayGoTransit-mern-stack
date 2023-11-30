import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { User } from '../models/user.model';
import { AppError } from '../utils/errorHandler';
import { Document } from 'mongoose';

interface AuthRequest extends Request {
     user?: Document;
}

export const protect = async (
     req: AuthRequest,
     res: Response,
     next: NextFunction
) => {
     try {
          const token = req.cookies.staygotoken;

          //  return error if there is no token
          if (!token) {
               return next(new AppError('Unauthorized request', 401));
          }

          //  verify token if there is token
          let decoded: any;

          jwt.verify(
               token,
               process.env.JWT_SECRET as string,
               (err: any, decoded: any) => {
                    if (err) {
                         return next(new AppError(err.message, 400));
                    }

                    decoded = decoded;
               }
          );

          if (decoded) {
               const user = await User.findById(decoded.id);

               if (user) {
                    req.user = user;

                    next();
               } else {
                    return next(new AppError('Unauthorized request', 401));
               }
          }
     } catch (err: any) {
          return next(new AppError(err.message, 500));
     }
};
