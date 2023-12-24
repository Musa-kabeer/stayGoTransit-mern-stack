import express from 'express';
import { upload } from '../middleware/multerMiddleware';
import { createCar, getAllCar } from '../controllers/car.controller';

const router = express.Router();

router.get('/', getAllCar);
router.post('/', upload.single('image'), createCar);
// router.get('/best-hotel', getBestHotel);

export { router as carRoutes };
