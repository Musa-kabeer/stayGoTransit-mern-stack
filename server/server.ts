import * as dotenv from 'dotenv';
dotenv.config();
import { app } from './app';
import { connectDB } from './utils/db';
import { connectRedis } from './utils/redis';

// CONNECT TO OUR DATABASE
connectDB();

// CONNECT TO OUR REDis DATABASE
connectRedis;

const PORT = process.env.PORT || 4545;

// CREATE SERVER
app.listen(PORT, () => {
     console.log(`Server running on PORT ${PORT}`);
});
