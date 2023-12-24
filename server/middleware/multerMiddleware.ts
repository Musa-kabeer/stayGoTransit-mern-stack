import multer from 'multer';

const storage = multer.diskStorage({
     destination: (req, file, cb) => {
          cb(null, 'public/hotels');
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

export const upload = multer({ storage });
