import mongoose, { Document, Model, Schema, mongo } from 'mongoose';

import * as argon2 from 'argon2';

const emailRegexPattern: RegExp = /^[^\s@]+ @[^\s@]+\.[^\s@]+$/;

export interface IUser extends Document {
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

const userSchema: Schema<IUser> = new mongoose.Schema(
     {
          name: {
               type: String,
          },

          username: {
               type: String,
               unique: true,
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

export const User: Model<IUser> = mongoose.model('User', userSchema);
