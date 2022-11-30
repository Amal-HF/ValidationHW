import express from 'express'
import { loginHandler, registerHandler } from '../controller/user.controller';
import validate from '../middleware/validate';
import { userSchema } from '../zod_scema/user.schema';
// import 'dotenv/config'


const router = express.Router();

router.post('/register', validate(userSchema), registerHandler);
router.post('/login', loginHandler);

export default router;