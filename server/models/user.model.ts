import mongoose, { Document, Schema, model } from 'mongoose';
import * as argon2 from 'argon2';
import * as crypto from 'crypto';

const emailRegexPattern: RegExp = /^[^\s@]+ @[^\s@]+\.[^\s@]+$/;

interface IUser extends Document {
     name: string;
     username: string;
     user_id: string;
     email: string;
     isVerified: boolean;
     otp: string;
     avatar: {
          public_id: string;
          url: string;
     };
     role: string;
     password: string;

     createOTPCode(): Promise<number>;
}

const userSchema: Schema<IUser> = new mongoose.Schema(
     {
          name: {
               type: String,
          },

          otp: String,

          username: {
               type: String,
               unique: true,
          },

          user_id: {
               type: String,
               required: [true, 'A user must have id'],
          },

          email: {
               type: String,
               unique: true,
               required: [true, 'Email is required'],
               validate: {
                    validator: (val: string) => emailRegexPattern.test(val),
                    message: 'Email must be a valid email',
               },
          },

          avatar: {
               public_id: String,
               url: String,
          },

          role: {
               type: String,
               enum: ['user', 'admin'],
               default: 'user',
          },

          isVerified: {
               type: Boolean,
               default: false,
          },

          password: {
               type: String,
               minlength: [
                    8,
                    'User password must be minimum length of 8 characters',
               ],
               select: false,
          },
     },
     { timestamps: true }
);

// HASH USER PASSWORD ON SAVE
userSchema.pre<IUser>('save', async function (next) {
     if (!this.isModified('password')) return next();

     this.password = await argon2.hash(this.password);

     next();
});

// COMPARE USER PASSWORD
userSchema.methods.comparePassword = async (
     plainPassword: string,
     hashedPassword: string
): Promise<boolean> => {
     return await argon2.verify(plainPassword, hashedPassword);
};

// create otp token
userSchema.methods.createOTPCode = async function () {
     const buffer = crypto.randomBytes(2);

     const randomInt = buffer.readUInt16BE(0);

     const randomDigit: number = 1000 + (randomInt % 9000);

     console.log(randomDigit);

     // generate hashed token to database
     this.otp = await argon2.hash(`${randomDigit}`);

     return randomDigit;
};

const User = model<IUser>('User', userSchema);

export { User };
