import { NextFunction, Request, Response } from 'express';
import Jwt from 'jsonwebtoken';

import { User, IUser } from '../models/user.model';
import { catchAsyncError } from '../utils/catchAsyncError';
import { AppError } from '../utils/errorHandler';

// REGISTER NEW USER
interface IRegisterUser {
     email: string;
}

// REGISTER NEW USER
interface IRegisterAdmin {
     name: string;
     username: string;
     email: string;
     isVerified: boolean;
     avatar: {
          public_id: string;
          url: string;
     };
     role: string;
     password: string;
}

/**
 * USER REGISTER WITH EMAIL ACCOUNT ONLY
 */
const registerUser = catchAsyncError(
     async (req: Request, res: Response, next: NextFunction) => {
          try {
               const { email } = req.body as IRegisterUser;
          } catch (err: any) {
               return next(new AppError(err.message, 400));
          }
     }
);

/**
 * WHY ADMIN
 *  REGISTER WITH
 *  EMAIL ACCOUNT
 *  NAME
 * USERNAME
 * AND PASSWORD
 */
const registerAdmin = catchAsyncError(
     async (req: Request, res: Response, next: NextFunction) => {
          try {
               // Validate for username required manually
          } catch (err: any) {
               return next(new AppError(err.message, 400));
          }
     }
);

export { registerUser, registerAdmin };
