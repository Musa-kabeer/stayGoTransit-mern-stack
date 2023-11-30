import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { Document } from 'mongoose';

import { User } from '../models/user.model';
import { catchAsyncError } from '../utils/catchAsyncError';
import { AppError } from '../utils/errorHandler';
import { SendEmail } from '../utils/email';
import moment from 'moment';

/**
 * signup normal user using email only
 */

interface ICreateUserToken {
     email: string;
     _id: string;
}

interface AuthRequest extends Request {
     user: Document;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(email: string) {
     return emailRegex.test(email);
}

// creating response token
const createToken = (
     res: Response,
     user: ICreateUserToken,
     statusCode: number,
     message?: string
) => {
     // Generate a random string some length for JWT secret

     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string);

     return res.status(statusCode).json({
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
          const user = await User.findById(req.user.id);

          if (!user) {
               return next(new AppError('Unauthorized request', 401));
          }

          if (!user.otp) {
               return next(
                    new AppError('Your account has already been verified', 200)
               );
          }

          // checking if 5 minutes as passed
          const now = moment();
          if (!now.isAfter(user.otpCreatedDuration)) {
               return next(
                    new AppError(
                         'Please request for new otp. 5 minutes as passed! 🙃',
                         400
                    )
               );
          }

          const otpChecked = await user.verifyOTPToken(req.body.otp, user.otp);

          if (!otpChecked) {
               return next(new AppError('Incorrect otp sent', 400));
          }

          const message = `user ${user.email} has been successfully verified!`;

          return createToken(res, user, 201, message);
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
          const { email } = req.body;

          // if there is no email or password
          if (!email) {
               return next(new AppError('Email  is required! 😡', 400));
          }

          const user = await User.findOne({ email: email });

          // if there is no user
          if (!user) {
               return next(new AppError('User does not exist 😡', 400));
          }

          console.log(req.ip);
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
