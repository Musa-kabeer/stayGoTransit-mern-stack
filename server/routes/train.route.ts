import express from 'express';
import { upload } from '../middleware/multerMiddleware';
import { createTrain, getAllTrain } from '../controllers/train.controller';

const router = express.Router();

router.get('/', getAllTrain);
router.post('/', upload.single('image'), createTrain);
// router.get('/best-hotel', getBestHotel);

export { router as trainRoutes };
