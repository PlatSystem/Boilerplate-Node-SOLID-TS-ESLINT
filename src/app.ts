import express, { NextFunction, Request, Response } from 'express';

import 'express-async-errors';
import 'dotenv/config';

import cors from 'cors';
import morgan from 'morgan';

// import { pool } from './config/configDataBase';
import { AppError } from './config/configErrors/AppError';
// import { transporter } from './config/configNodeMailer';
import { routerCreateUser } from './routes/createUser.routes';

const app = express();

// pool.connect();
// transporter.verify();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

app.use(routerCreateUser);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
    return next();
  },
);

export { app };
