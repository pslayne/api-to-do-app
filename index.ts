import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.DEFAULT_PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('To-do App Server');
});

app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`)
});