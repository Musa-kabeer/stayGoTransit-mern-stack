import mongoose, { Document, Schema } from 'mongoose';

interface Hotel extends Document {
     name: string;
     image: string;
     location: string;
     uniqueId: string;
}

const hotelSchema: Schema<Hotel> = new mongoose.Schema(
     {
          name: {
               type: String,
               required: [true, 'A Hotel must have a name!'],
          },

          image: {
               type: String,
               required: [true, 'A Hotel must have at least one image!'],
          },

          location: {
               type: String,
               required: [true, 'A Hotel must have location'],
          },

          uniqueId: String,
     },
     {
          timestamps: true,
          toJSON: {
               virtuals: true,
          },
     }
);

export const Hotel = mongoose.model<Hotel>('hotel', hotelSchema);
