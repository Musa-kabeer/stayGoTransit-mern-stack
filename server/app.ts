import express, { NextFunction, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors, { CorsOptions } from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import cloudinary from 'cloudinary';
import { ErrorMiddleware } from './middleware/error';
import { userRoutes } from './routes/auth.route';
import { hotelRoutes } from './routes/hotel.route';
import { carRoutes } from './routes/car.route';
import { trainRoutes } from './routes/train.route';

const app = express();

cloudinary.v2.config({
     cloud_name: process.env.CLOUD_NAME,
     api_key: process.env.CLOUD_API_KEY,
     api_secret: process.env.CLOUD_SECRET_KEY,
});

/**
 * ------------------
 * LISTS OF MIDDLEWARES
 *
 */

// CROSS-ORIGIN
const corsOptions: CorsOptions = {
     origin: [process.env.PROD_ORIGIN!, process.env.DEV_ORIGIN!],
     methods: ['GET', 'POST', 'DELETE', 'PATCH'],
     optionsSuccessStatus: 200,
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

/**
 * ------------------
 * focused routes are specified below
 * ------------------
 */
app.use('/api/v1/auth', userRoutes);
app.use('/api/v1/hotels', hotelRoutes);
app.use('/api/v1/cars', carRoutes);
app.use('/api/v1/trains', trainRoutes);

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
