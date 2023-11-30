import mongoose, { Document, Schema, model } from 'mongoose';
import * as argon2 from 'argon2';
import * as crypto from 'crypto';
import { nanoid } from 'nanoid';

interface IUser extends Document {
     user_id: string;
     email: string;
     isVerified: boolean;
     otp: string | undefined;
     otpCreatedDate: Date | undefined;
     createOTPCode(): Promise<number>;
     comparePassword(arg0: string, arg1: string): Boolean;
     verifyOTPToken(arg0: string, arg1: string): Boolean;
}

const userSchema: Schema<IUser> = new mongoose.Schema(
     {
          otp: String,

          otpCreatedDate: Date,

          user_id: String,

          email: {
               type: String,
               unique: true,
               required: [true, 'Email is required'],
          },

          isVerified: {
               type: Boolean,
               default: false,
          },
     },
     {
          timestamps: true,
          toJSON: {
               virtuals: true,
               versionKey: false,
               transform: function (doc, ret) {
                    delete ret.__v;
                    delete ret.createdAt;
                    delete ret.updatedAt;
               },
          },
     }
);

// userSchema.pre(/^find/, function (next) {
//      this.select('-__v -createdAt - updatedAt');

//      next();
// });

userSchema.pre('save', function (next) {
     this.user_id = nanoid();

     next();
});

// create otp token
userSchema.methods.createOTPCode = async function (): Promise<number> {
     const buffer = crypto.randomBytes(2);

     const randomInt = buffer.readUInt16BE(0);

     const randomDigit: number = 1000 + (randomInt % 9000);

     // generate hashed token to database
     this.otp = await argon2.hash(`${randomDigit}`);

     this.otpCreatedDate = Date();

     return randomDigit;
};

// verify otp
userSchema.methods.verifyOTPToken = async (
     plainOTP: string,
     hashedOTP: string
): Promise<Boolean> => {
     return await argon2.verify(hashedOTP, plainOTP);
};

export const User = model<IUser>('User', userSchema);
