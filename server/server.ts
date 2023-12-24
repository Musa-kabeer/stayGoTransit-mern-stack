import * as dotenv from 'dotenv';
dotenv.config();
import { app } from './app';
import { connectDB } from './utils/db';

// CONNECT TO OUR DATABASE
connectDB();

const PORT = process.env.PORT || 4545;

// CREATE SERVER
app.listen(PORT, () => {
     console.log(`Server running on PORT ${PORT}`);
});
