require('dotenv').config();
import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
     res.send(`
         <h1>Welcome to Stay Go Transit</h1>
    `);
});

app.listen(process.env.PORT, () => {
     console.log(`Server running on port ${process.env.PORT}`);
});
