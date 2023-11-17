require('dotenv').config();
import { app } from './app';
import { connectDB } from './util/db';
import { connectRedis } from './util/redis';

// CONNECT TO OUR DATABASE
connectDB();

// CONNECT TO OUR REDis DATABASE
connectRedis;

// CREATE SERVER
app.listen(process.env.PORT, () => {
     console.log(`Server running on port ${process.env.PORT}`);
});
