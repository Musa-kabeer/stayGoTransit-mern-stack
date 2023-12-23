import express from 'express';
import { getAllHotels } from '../controllers/hotel.controller';

const router = express.Router();

router.get('/', getAllHotels);

export { router as hotelRoutes };
