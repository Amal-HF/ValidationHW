import express from 'express'
import { adminHandler, getAllUsersHandler, loginHandler, registerHandler, userHandler } from '../controller/user.controller';
import {
    protect,
    authorize
} from '../middleware/protect';
import validate from '../middleware/validate';
import { userSchema } from '../zod_scema/user.schema';


const router = express.Router();

// router.get('/', getAllUsersHandler);
router.get('/', protect, getAllUsersHandler);
router.post('/register', validate(userSchema), registerHandler);
router.post('/login', loginHandler);

router.get('/admin', protect, authorize('ADMIN'),adminHandler);
router.get('/user', protect, authorize('USER'), userHandler);



export default router;