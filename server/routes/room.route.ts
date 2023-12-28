import express from 'express';
import { upload } from '../middleware/multerMiddleware';
import {
     createRoom,
     getAllRoom,
     getRoom,
} from '../controllers/room.controller';

const router = express.Router();

router.get('/', getAllRoom);
router.post('/', upload.array('images'), createRoom).get('/:id', getRoom);

export { router as roomRoutes };
