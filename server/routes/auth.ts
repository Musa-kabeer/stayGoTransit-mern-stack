import express from 'express';
const router = express.Router();
import {
     signupAndLogin,
     otpVerification,
     signup,
} from '../controllers/auth.controller';
import { protect } from '../middleware/protected';

// Authentications
router.post('/', signupAndLogin);
router.post('/signup', signup);
router.post('/otp-verification', protect, otpVerification);

export { router as userRoutes };
