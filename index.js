import express from 'express';
import cors from 'cors';
import { factsRoutes } from './routes/facts.js';

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use(factsRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
