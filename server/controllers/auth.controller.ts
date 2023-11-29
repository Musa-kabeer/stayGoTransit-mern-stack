import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as crypto from 'crypto';

import { User } from '../models/user.model';
import { catchAsyncError } from '../utils/catchAsyncError';
import { AppError } from '../utils/errorHandler';
import { SendEmail } from '../utils/email';

/**
 * signup normal user using email only
 */

interface ICreateUser {
     email: string;
     _id: string;
}

// generating random secret each time users request for token
function generateRandomString(length: number): string {
     return crypto.randomBytes(length).toString('hex');
}

// creating response token
const createToken = (res: Response, user: ICreateUser, statusCode: number) => {
     // Generate a random string some length for JWT secret
     const jwtSecret = generateRandomString(
          Number(process.env.JWT_SECRET_KEY_LENGTH)
     );

     const token = jwt.sign({ id: user._id }, jwtSecret);

     return res.status(statusCode).json({
          status: 'success',
          token,
          user: {
               email: user.email,
          },
     });
};

export const signup = catchAsyncError(
     async (req: Request, res: Response, next: NextFunction) => {
          try {
               const userExist = await User.findOne({ email: req.body.email });

               if (userExist) {
                    return next(new AppError('Email already existed! 😡', 400));
               }

               const user = await User.create(req.body);

               // create user otp code
               const otp: number = await user.createOTPCode();

               // send verification email
               new SendEmail(user.email).otpVerification(otp);

               createToken(res, user, 201);
          } catch (err: any) {
               return next(new AppError(err.message, 500));
          }
     }
);

const login = catchAsyncError(
     async (req: Request, res: Response, next: NextFunction) => {
          try {
               const user = await User.findOne({ email: req.body.email });
               return res.status(200).json({
                    status: 'success',
                    data: user,
               });
          } catch (err: any) {
               return next(new AppError(err.message, 500));
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
               const user = await User.findOne({ email: req.body.email });
               return res.status(200).json({
                    status: 'success',
                    data: user,
               });
          } catch (err: any) {
               return next(new AppError(err.message, 500));
          }
     }
);
