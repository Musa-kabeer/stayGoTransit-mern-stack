import { Request } from 'express';
import multer, { FileFilterCallback } from 'multer';

const storage = multer.diskStorage({
     destination: (req, file, cb) => {
          cb(null, `${__dirname}/../public/`);
     },

     filename: (req, file, cb) => {
          const filename = file.originalname.split('.');
          // generating unique name
          const newFilename = `${Math.random()}-${filename.at(0)}`;
          // getting the extension name
          const ext = filename.at(-1);

          cb(null, `${newFilename}.${ext}`);
     },
});

const fileFilter = (
     req: Request,
     file: Express.Multer.File,
     cb: FileFilterCallback
) => {
     // Filter to accept only image files
     if (file.mimetype.startsWith('image/')) {
          cb(null, true);
     } else {
          cb(null, false);
     }
};

export const upload = multer({ storage, fileFilter });
