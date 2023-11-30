import express, { NextFunction, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { ErrorMiddleware } from './middleware/error';

import { userRoutes } from './routes/auth';

const app = express();

/**
 *
 * LISTS MIDDLEWARE
 *
 */

// CROSS-ORIGIN
const corsOptions = {
     origin:
          process.env.NODE_ENV === 'production'
               ? process.env.PROD_ORIGIN
               : process.env.DEV_ORIGIN,
     methods: ['GET', 'POST', 'DELETE', 'PATCH'],
     optionSuccessStatus: 200,
     allowedHeaders: ['Content-Type', 'Authorization', 'x-access-token'],
     credentials: true,
};
app.use(cors(corsOptions));

// helmet
app.use(helmet());

// morgan
if (process.env.NODE_ENV === 'development') {
     app.use(morgan('dev'));
}

const now: any = new Date();

const target: any = new Date('2023-11-30T15:27:30.000+00:00');

console.log(now > target);

// cookie-parser initialization
app.use(cookieParser());

// body parser & static files
app.use(express.json({ limit: '50mb' }));
app.use(express.static(`${__dirname}`));

app.get('/', (req: Request, res: Response) => {
     res.send(`
         <h1>Welcome to Stay Go Transit</h1>
    `);
});

app.use('/api/v1/users', userRoutes);

// UNKNOWN ROUTE
app.all('*', (req: Request, res: Response, next: NextFunction) => {
     res.status(400).json({
          status: 'fail',
          message: `The route provided (${req.originalUrl}) is not on this server!`,
     });
});

// GLOBAL ERROR HANDLER
app.use(ErrorMiddleware);

export { app };
