/** @format */
import bodyParser from 'body-parser';
import express from 'express';
import { Request, Response, Application } from 'express';
import cors from 'cors';
import compression from 'compression';
import addServicesToRoutes from './addServicesToRoutes';

export default async (servicesDir: string): Promise<Application> => {
  const app = express();
  const router = express.Router;

  await addServicesToRoutes(router)(servicesDir);

  app.use(cors());
  app.use(compression());
  app.use(bodyParser.json());
  app.use(router);
  app.use(function(req: Request, res: Response): void {
    console.error(`${req.path} is missing`);

    res.status(404).end();
  });

  return app;
};
