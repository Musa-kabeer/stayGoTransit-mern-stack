import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { Document } from 'mongoose';

import { User } from '../models/user.model';
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
     message?: string,
     navigation?: string
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
               navigation,
          });
};

export const signupAndLogin = async (
     req: Request,
     res: Response,
     next: NextFunction
) => {
     try {
          const { email } = req.body;
          // there must be an email before condering user want to login or signup
          if (!email) {
               return next(new AppError('Email is required! 😡', 400));
          }

          // check if the user exist
          const user = await User.findOne({ email });

          ////////////
          ////////
          //////
          ////
          ///

          // if there is user that means that user want to login
          if (user) {
               if (!user.isVerified) {
                    return;
               }

               // create user login otp
               const otp: number = await user.createOTPCode();

               await user.save();

               // send verification email
               await new SendEmail(user.email).loginEmail(otp);

               // log user in
               const navigation = 'verify-otp';
               return createToken(res, user, 200, '', navigation);
          }

          ///////////////
          /////////////
          //////////////
          ///////

          return res.status(200).json({
               status: 'success',
               navigation: 'consent-screen',
               email,
          });
     } catch (err: any) {
          console.log(err);
          return next(new AppError(err.message, 500));
     }
};

export const signup = async (
     req: Request,
     res: Response,
     next: NextFunction
) => {
     try {
          const { email } = req.body;

          // 1) check for email validity 🕵️‍♀️
          if (!isValidEmail(email)) {
               return next(
                    new AppError('Please provide valid email address', 400)
               );
          }

          // create user then 🚀
          const newUser = await User.create({ email: req.body.email });

          // create user otp code 🕵🏻‍♂️
          const otp: number = await newUser.createOTPCode();

          // save otp created in our database
          await newUser.save();

          // send verification email 💬
          await new SendEmail(newUser.email).otpVerification(otp);

          const message = `Please check your email (${newUser.email}), for email verification`;

          return createToken(res, newUser, 201, message);
     } catch (error) {}
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

                    return createToken(res, user, 200, message);
               }

               return next(new AppError('Unauthorized', 401));
          }
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
// const registerAdmin = catchAsyncError(
//      async (req: Request, res: Response, next: NextFunction) => {
//           try {
//                // Validate for username required manually
//                const user = await User.findOne({ email: req.body.email });
//                return res.status(200).json({
//                     status: 'success',
//                     data: user,
//                });
//           } catch (err: any) {
//                return next(new AppError(err.message, 500));
//           }
//      }
// );
