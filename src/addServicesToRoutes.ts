/** @format */

import fs from 'fs-extra';
import path from 'path';
import propsMatch from './helper/propsMatch';
import { Router, Request, Response, NextFunction, RouterOptions } from 'express';

interface ExpressRouter {
  (options?: RouterOptions): Router;
}

export default function addServicesToRoutes(router: ExpressRouter): Function {
  return async function(directory: string): Promise<void> {
    const files = await fs.readdir(directory);

    files.forEach(async function(file: string): Promise<void> {
      const thisPath = path.join(directory, file);
      const stat = await fs.stat(thisPath);

      if (stat.isDirectory()) {
        await addServicesToRoutes(router)(thisPath);
        return;
      }

      let module = await import(thisPath);

      if (module.default) {
        module = module.default;
      }

      const {
        method,
        path: actionPath,
        request = {},
        response: { status = 200, body = undefined } = {},
        handler,
      } = module;

      // eslint-disable-next-line no-console
      console.log(method, actionPath);

      router[method.toLowerCase()](actionPath, async function(
        req: Request,
        res: Response,
        next: NextFunction,
      ): Promise<void> {
        if (handler) {
          await handler(req, res, next);

          return;
        }

        const { body: requestBody, query: requestQuery } = request;

        if (!requestBody && !requestQuery) {
          res.status(status).json(body);

          return;
        }

        if (
          (requestBody && !propsMatch(requestBody, req.body)) ||
          (requestQuery && !propsMatch(requestQuery, req.query))
        ) {
          const condition = [!!requestBody, !!requestQuery];

          const errorDescription = {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            [[true, true] as any]: {
              expectedBody: requestBody,
              receivedBody: req.body,
              expectedQuery: requestQuery,
              receivedQuery: req.query,
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            [[false, true] as any]: {
              expectedQuery: requestQuery,
              receivedQuery: req.query,
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            [[true, false] as any]: {
              expectedBody: requestBody,
              receivedBody: req.body,
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          }[condition as any];

          const error = {
            message: `${actionPath} DOES NOT MATCH`,
            ...errorDescription,
          };

          res.status(500).json(error);

          // eslint-disable-next-line no-console
          console.error(error);

          return;
        }

        res.status(status).json(body);
      });
    });
  };
}
