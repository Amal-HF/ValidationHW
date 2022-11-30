import express from 'express'
import { connectDB } from './config/db';
import userRouter from './routes/user.router';
// import 'dotenv/config'
import schoolRouter from './routes/school.router';

const app = express();
app.use(express.json());

// db connecton 
connectDB();

// middlewares
app.use('api/v1/user', userRouter);
app.use('api/v1/school',schoolRouter);


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT);
})
