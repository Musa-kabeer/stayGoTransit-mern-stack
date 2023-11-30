import express from 'express';
const router = express.Router();
import { signup, login, otpVerification } from '../controllers/auth.controller';
import { protect } from '../middleware/protected';

// Authentications
router.post('/signup', signup);
router.post('/login', login);
router.post('/otp-verification', protect, otpVerification);

export { router as userRoutes };
