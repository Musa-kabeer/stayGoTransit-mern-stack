import mongoose from 'mongoose';

const dataUrl: string | any = process.env.MONGO_URI;

export const connectDB = async () => {
     try {
          await mongoose.connect(dataUrl).then((data) => {
               console.log(
                    `DB connected successfully with a url of ${data.connection.host}`
               );
          });
     } catch (err: any) {
          console.log(err.message);
     }
};
