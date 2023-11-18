import express, { NextFunction, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import { nanoid } from 'nanoid';
import { ErrorMiddleware } from './middleware/error';

const app = express();

console.log(nanoid());
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

// MORGAN
if (process.env.NODE_ENV === 'development') {
     app.use(morgan('dev'));
}

// COOKIE-PARSER INITIALIZATION
app.use(cookieParser());

// BODY-PARSER
app.use(express.json({ limit: '50mb' }));

app.get('/', (req: Request, res: Response) => {
     res.send(`
         <h1>Welcome to Stay Go Transit</h1>
    `);
});

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
