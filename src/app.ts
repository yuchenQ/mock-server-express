/** @format */
// 第三方模块
import bodyParser from 'body-parser';
import express from 'express';
import { NextFunction, Request, Response } from 'express'; // express 申明文件定义的类型

const app = express();

// 处理 post 请求的请求体，限制大小最多为 20 兆
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
app.use(bodyParser.json({ limit: '20mb' }));

// error handler
app.use(function(err: Error, req: Request, res: Response, next: NextFunction): void {
  res.sendStatus(500);

  next();
});

app.listen(8000, function(): void {
  console.log(`the server is start at port ${8000}`);
});

export default app;
