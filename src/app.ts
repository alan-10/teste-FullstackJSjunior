import { Request, Response, NextFunction, request } from 'express';
import 'express-async-errors';
import { app } from './server';
import { AppError } from './errors/AppError';

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'Error',
        message: err.message,
      });

      return response.status(500).json({
        status: 'Error',
        message: 'Internal ServerError',
      });
    }
  }
);

app.listen(3333, () => console.log('Server started on port 33333'));
