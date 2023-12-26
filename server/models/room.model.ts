import mongoose, { Document, Schema } from 'mongoose';

interface Room extends Document {
     hotelName: string;
     shortDescription: string;
     description: string;
     price: number;
     amenities: string[];
     state?: string;
     town?: string;
     averageRatings?: number;
     address: string;
     images: string[];
     location: [number, number];
     hotelId: string;
     roomId: string;
}

const roomSchema: Schema<Room> = new mongoose.Schema(
     {
          hotelName: {
               type: String,
               trim: true,
               required: [true, 'A Room must have hotel name!'],
          },

          shortDescription: {
               type: String,
               trim: true,
               minLength: [
                    10,
                    'Short description must be at least 10 characters',
               ],
               maxLength: [
                    200,
                    'Short description must not exceed 60 characters',
               ],
               required: [true, 'A Room must have short description'],
          },

          description: {
               type: String,
               trim: true,
               minLength: [40, 'Description must be at least 40 characters'],
               maxLength: [400, 'Description must not exceed 200 characters'],
               required: [true, 'A Hotel must have a nice description!'],
          },

          address: {
               type: String,
               trim: true,
               required: [true, 'A Hotel must have an address to locate it!'],
          },

          state: {
               type: String,
          },

          images: {
               type: [String],
               required: [true, 'A Room must have images'],
               validate: {
                    validator: (val: string[]) => {
                         return val.length <= 5;
                    },
                    message: 'image cannot exceed four images',
               },
          },

          location: {
               type: [Number, Number],
               required: [true, 'A Room must have location coordinates!'],
          },

          town: {
               type: String,
               trim: true,
          },

          price: {
               type: Number,
          },

          amenities: {
               type: [String],
          },

          averageRatings: {
               type: Number,
          },

          hotelId: {
               type: String,
               required: [true, 'A Room must have hotel ID :)'],
          },

          roomId: String,
     },
     {
          timestamps: true,
          toJSON: {
               virtuals: true,
          },
     }
);

roomSchema.index({ location: '2dsphere' });

// Virtual numbers of reviews
export const Room = mongoose.model<Room>('room', roomSchema);
