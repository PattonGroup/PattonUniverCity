import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import 'express-async-errors';
import { json, urlencoded } from 'body-parser';
import cookieSession from 'cookie-session';
import userRoutes from './routes/userRoutes';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/database';

dotenv.config();
connectDB();
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.set('trust proxy', true);

//---------------------Middlewares--------------------------------

app.use(cors({ exposedHeaders: '*' }));
app.use(urlencoded({ extended: true }));
app.use(json({ limit: '50mb' }));
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'development',
    maxAge: 3600000,
    httpOnly: true,
    secret: 'smdljkfgslkdjfglksjdflkgjsdf21525s54d45fgs',
  })
);

//------------------------ Routes------------------------------------
app.use('/api/users', userRoutes);

const __dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
}

app.use(notFound);
app.use(errorHandler);

export { app };
