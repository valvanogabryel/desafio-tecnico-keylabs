import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import routes from './routes';

const app = express();
const port = process.env.PORT ?? 8000;
const allowedOrigins = [process.env.ORIGIN_URL];

app.use(cookieParser());
app.use(
  cors({
    origin: 'https://desafio-tecnico-keylabs.vercel.app',
    credentials: true,
  })
);
app.use(express.json());

routes(app);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
