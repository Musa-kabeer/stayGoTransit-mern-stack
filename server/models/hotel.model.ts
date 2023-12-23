import mongoose, { Document, Schema } from 'mongoose';

interface IHotel extends Document {
     name: string;
     description: string;
     address: string;
     state: string;
     town: string;
     country: string;
     ratings: number;
     images: string[];
     location: [number, number];
}

const hotelSchema: Schema<IHotel> = new mongoose.Schema(
     {
          name: {
               type: String,
               required: [true, 'Hotel must have a name!'],
          },

          description: {
               type: String,
               minLength: 40,
               maxLength: 200,
               required: [true, 'A Hotel must have a nice description!'],
          },

          address: {
               type: String,
               required: [true, 'A Hotel must have an address to locate it!'],
          },

          state: {
               type: String,
               required: [
                    true,
                    'A Hotel must have a state where it is located!',
               ],
          },

          town: {
               type: String,
               required: [
                    true,
                    'A Hotel must have a town where it is located!',
               ],
          },

          country: {
               type: String,
               required: [
                    true,
                    'A Hotel must have a country where it is located!',
               ],
          },

          ratings: {
               type: Number,
          },

          images: {
               type: [String],
               required: [true, 'A Hotel must have at least one image!'],
          },

          location: {
               type: [Number],
               required: [
                    true,
                    'A hotel must have a longitude and latitude for displaying its map',
               ],
          },
     },
     {
          timestamps: true,
          toJSON: {
               virtuals: true,
          },
     }
);

export const Hotel = mongoose.model<IHotel>('hotel', hotelSchema);
