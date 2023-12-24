import express from 'express';
import { createHotel, getAllHotels } from '../controllers/hotel.controller';
import { upload } from '../middleware/multerMiddleware';

const router = express.Router();

router.get('/', getAllHotels);
router.post('/', upload.single('image'), createHotel);
// router.get('/best-hotel', getBestHotel);

export { router as hotelRoutes };
