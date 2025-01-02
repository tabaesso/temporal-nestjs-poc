// src/app.ts
import express from 'express';
import { setRoutes } from './routes/index';

const app = express();
const port = 3001;

setRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});