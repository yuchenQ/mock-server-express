/** @format */

import { Request, Response } from 'express';
/** @format */

export default {
  method: 'POST',
  path: '/users',
  handler: function(req: Request, res: Response): void {
    const { foo } = req.body;

    if (foo && foo === 'bar') {
      const error = [
        {
          name: 'GO_AWAY',
          message: "I don't like foo === bar",
        },
      ];
      res.status(400).json(error);

      return;
    }

    res.status(200).json(req.body);
  },
};
