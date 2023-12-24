import mongoose, { Document, Schema } from 'mongoose';

interface Train extends Document {
     name: string;
     image: string;
     location: string;
}

const trainSchema: Schema<Train> = new mongoose.Schema(
     {
          name: {
               type: String,
               required: [true, 'A Train must have a name!'],
          },

          image: {
               type: String,
               required: [true, 'A Train must have at least one image!'],
          },

          location: {
               type: String,
               required: [true, 'A Train must have location'],
          },
     },
     {
          timestamps: true,
          toJSON: {
               virtuals: true,
          },
     }
);

export const Train = mongoose.model<Train>('train', trainSchema);
