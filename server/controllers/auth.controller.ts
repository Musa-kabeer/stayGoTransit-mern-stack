import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { Document } from 'mongoose';

import { User } from '../models/user.model';
import { catchAsyncError } from '../utils/catchAsyncError';
import { AppError } from '../utils/errorHandler';
import { SendEmail } from '../utils/email';

/**
 * signup normal user using email only
 */

interface ICreateUserToken {
     email: string;
     _id: string;
}

interface AuthRequest extends Request {
     user?: Document;
}

interface ICookie {
     httpOnly: boolean;
     maxAge: number;
     domain?: string;
     path?: string;
     secure?: boolean;
     sameSite?: boolean | 'lax' | 'strict' | 'none' | undefined;
}

// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function isValidEmail(email: string): boolean {
     return emailRegex.test(email);
}

// is that 5 minute ago or greater
function isDate5MinutesAgoOrGreater(otpCreatedDate: Date): Boolean {
     const fiveMinutesLater = new Date(
          otpCreatedDate.getTime() + 5 * 60 * 1000
     );

     return new Date() >= fiveMinutesLater;
}

// creating response token
const createToken = (
     res: Response,
     user: ICreateUserToken,
     statusCode: number,
     message?: string
) => {
     // Generate a random string some length for JWT secret
     const token = jwt.sign(
          { id: user._id },
          process.env.JWT_SECRET as string,
          {
               expiresIn: '30 days',
          }
     );

     const cookieOptions: ICookie = {
          maxAge: 30 * 24 * 60 * 60 * 1000,
          httpOnly: true,
          path: '/',
     };

     if (process.env.NODE_ENV === 'production') {
          cookieOptions.secure = true;
          cookieOptions.sameSite = 'none';
     }

     return res
          .status(statusCode)
          .cookie('staygotransit', token, cookieOptions)
          .json({
               status: 'success',
               token,
               message,
          });
};

// signup
export const signup = async (
     req: Request,
     res: Response,
     next: NextFunction
) => {
     try {
          const userExist = await User.findOne({ email: req.body.email });

          // if user already registered! 😭
          if (userExist) {
               return next(new AppError('Email already existed! 😡', 400));
          }

          // check for email validity
          if (!isValidEmail(req.body.email)) {
               return next(new AppError('Email provided must be valid', 400));
          }

          // create user then 🚀
          const user = await User.create({ email: req.body.email });

          // create user otp code 🕵🏻‍♂️
          const otp: number = await user.createOTPCode();

          await user.save();

          // send verification email 💬
          await new SendEmail(user.email).otpVerification(otp);

          const message = `Please check your email (${user.email}), for email verification`;

          return createToken(res, user, 201, message);
     } catch (err: any) {
          return next(new AppError(err.message, 500));
     }
};

export const otpVerification = async (
     req: AuthRequest,
     res: Response,
     next: NextFunction
) => {
     try {
          // there is user object on request, that is when the implemention should work 👹😭
          if (req.user) {
               const user = await User.findById(req.user.id);

               if (!user) {
                    return next(new AppError('Unauthorized request', 401));
               }

               if (!user.otp && user.isVerified === true) {
                    return next(
                         new AppError(
                              'Your account has already been verified',
                              200
                         )
                    );
               }

               // Check if createdDate is within the last 5 minutes
               if (user.otpCreatedDate && user.otp) {
                    console.log(
                         isDate5MinutesAgoOrGreater(user.otpCreatedDate)
                    );
                    // check if user created is greater than 5 minutes ago
                    if (isDate5MinutesAgoOrGreater(user.otpCreatedDate)) {
                         user.otp = undefined;
                         user.otpCreatedDate = undefined;

                         await user.save();

                         return next(
                              new AppError(
                                   'Please request for new otp. 5 minutes as passed! 🙃',
                                   400
                              )
                         );
                    }

                    const otpChecked = user.verifyOTPToken(
                         String(req.body.otp),
                         user.otp
                    );

                    if (!otpChecked) {
                         return next(new AppError('Incorrect otp sent', 400));
                    }

                    user.isVerified = true;
                    user.otp = undefined;
                    user.otpCreatedDate = undefined;

                    await user.save();

                    const message = `user ${user.email} has been successfully verified!`;

                    return createToken(res, user, 201, message);
               }

               return next(new AppError('Unauthorized', 401));
          }
     } catch (err: any) {
          return next(new AppError(err.message, 500));
     }
};

// login
export const login = async (
     req: Request,
     res: Response,
     next: NextFunction
) => {
     try {
          // if there is no email or password
          if (!req.body.email) {
               return next(new AppError('Email  is required! 😡.', 400));
          }

          const user = await User.findOne({ email: req.body.email });

          // if there is no user
          if (!user) {
               return next(new AppError('User does not exist 😡.', 400));
          }

          // check if user has been validated
          if (!user.isVerified) {
               return next(
                    new AppError('Please verify you email first 👿.', 400)
               );
          }

          // send verification email
          await new SendEmail(user.email).loginEmail();

          // log user in
          return createToken(res, user, 200);
     } catch (err: any) {
          return next(new AppError(err.message, 500));
     }
};

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
