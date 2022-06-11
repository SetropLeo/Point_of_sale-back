import 'reflect-metadata';
import express from 'express';
import './database';
import { routes } from './routes';

const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(routes);

app.listen(3001, () => console.log('Server running'));
