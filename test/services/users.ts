/** @format */

import { Request, Response } from 'express';

export default {
  method: 'POST',
  path: '/users',
  handler: function(req: Request, res: Response): void {
    const { foo } = req.body;

    if (foo && foo === 'bar') {
      res.status(400).json({
        errors: [
          {
            name: 'GO_AWAY',
            message: "I don't like foo === bar",
          },
        ],
      });

      return;
    }

    res.status(200).json(req.body);
  },
};
