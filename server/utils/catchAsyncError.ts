import { NextFunction, Request, Response } from 'express';

export const catchAsyncError =
     async (asyncFunc: any) =>
     (req: Request, res: Response, next: NextFunction) => {
          return Promise.resolve(asyncFunc(req, res, next).catch(next));
     };
