import { app } from './app.js';
import colors from 'colors';

const start = async () => {
  if (!process.env.ACCESS_TOKEN_SECRET) {
    throw new Error('JWT KEY must be defined');
  }
  if (!process.env.REFRESH_TOKEN_SECRET) {
    throw new Error('REFRESH TOKEN must be defined');
  }
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }
  const PORT = process.env.PORT || 5000;

  app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
        .bold
    )
  );
};

start();
