import multer from 'multer';

const storage = multer.diskStorage({
     destination: (req, file, cb) => {
          cb(null, 'public/');
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

const fileFilter = (req, file, cb) => {
     // Filter to accept only image files
     if (file.mimetype.startsWith('image/')) {
          cb(null, true);
     } else {
          cb(new Error('Not an image! Please upload only images.'), false);
     }
};

export const upload = multer({ storage, fileFilter });
