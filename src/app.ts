import 'reflect-metadata';
import express, { json } from 'express';
import './database';
import { routes } from '../src/routes';
import cors from 'cors';

class App {
  public express: express.Application

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(json());
    this.express.use(cors());

    this.express.use(function (req, res, next) {
      res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    })
  }

  routes() {
    this.express.use(routes);
  }

  listen(port: number) {
    this.express.listen(port, () => console.log(`Server is running in port ${port}`));
  }
}

export default new App();