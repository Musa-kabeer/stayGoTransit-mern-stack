import mongoose, { Document, Schema } from 'mongoose';

interface Car extends Document {
     name: string;
     image: string;
     location: string;
}

const carSchema: Schema<Car> = new mongoose.Schema(
     {
          name: {
               type: String,
               required: [true, 'A Car must have a name!'],
          },

          image: {
               type: String,
               required: [true, 'A Car must have at least one image!'],
          },

          location: {
               type: String,
               required: [true, 'A hotel must have location'],
          },
     },
     {
          timestamps: true,
          toJSON: {
               virtuals: true,
          },
     }
);

export const Car = mongoose.model<Car>('car', carSchema);
