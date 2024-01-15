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
    origin: function (origin, callback) {
      // verifica se a origem da solicitação está na lista de origens permitidas
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);
app.use(express.json());

routes(app);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
