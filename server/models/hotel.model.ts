import mongoose, { Document, Schema } from 'mongoose';

interface Hotel extends Document {
     name: string;
     image: string;
     location: string;
}

const hotelSchema: Schema<Hotel> = new mongoose.Schema(
     {
          name: {
               type: String,
               required: [true, 'Hotel must have a name!'],
          },

          image: {
               type: String,
               required: [true, 'A Hotel must have at least one image!'],
          },

          location: {
               type: String,
               required: [true, 'A hotel must have location'],
          },
          // description: {
          //      type: String,
          //      minLength: 40,
          //      maxLength: 200,
          //      required: [true, 'A Hotel must have a nice description!'],
          // },

          // address: {
          //      type: String,
          //      required: [true, 'A Hotel must have an address to locate it!'],
          // },

          // state: {
          //      type: String,
          //      required: [
          //           true,
          //           'A Hotel must have a state where it is located!',
          //      ],
          // },

          // town: {
          //      type: String,
          //      required: [
          //           true,
          //           'A Hotel must have a town where it is located!',
          //      ],
          // },

          // country: {
          //      type: String,
          //      required: [
          //           true,
          //           'A Hotel must have a country where it is located!',
          //      ],
          // },

          // will be using virtual aggregate to return ratings
          // ratings: {
          //      type: Number,
          // },

          // location: {
          //      type: [Number],
          //      required: [
          //           true,
          //           'A hotel must have a longitude and latitude for displaying its map',
          //      ],
          // },
     },
     {
          timestamps: true,
          toJSON: {
               virtuals: true,
          },
     }
);

export const Hotel = mongoose.model<Hotel>('hotel', hotelSchema);
