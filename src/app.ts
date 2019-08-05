/** @format */
import bodyParser from 'body-parser';
import express from 'express';
import { NextFunction, Request, Response } from 'express';

const app = express();

app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
app.use(bodyParser.json({ limit: '20mb' }));

app.use(function(err: Error, req: Request, res: Response, next: NextFunction): void {
  res.sendStatus(500);

  next();
});

app.listen(8000, function(): void {
  console.log(`the server is start at port ${8000}`);
});

export default app;
