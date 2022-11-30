import express from 'express'
import { getAllUsersHandler, loginHandler, registerHandler } from '../controller/user.controller';
import validate from '../middleware/validate';
import { userSchema } from '../zod_scema/user.schema';


const router = express.Router();

router.get('/', getAllUsersHandler);
router.post('/register', validate(userSchema), registerHandler);
router.post('/login', loginHandler);



export default router;