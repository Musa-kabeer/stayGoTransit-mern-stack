import express, { NextFunction, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors, { CorsOptions } from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { ErrorMiddleware } from './middleware/error';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { userRoutes } from './routes/auth';

const app = express();

/**
 *
 * LISTS MIDDLEWARE
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

app.use('/api/v1/auth', userRoutes);

// swagger
const swaggerSpecs = swaggerJsDoc({
     definition: {
          openapi: '3.0.0',

          info: {
               title: 'Stay Go Transit API',
               description: 'Stay Go Transit API Documentation',
               version: '0.1.0',
          },

          servers: [
               {
                    url: 'http://localhost:4545/',
               },
          ],
     },

     apis: ['./routes/*.ts', './models/*.ts'],
});
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

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
