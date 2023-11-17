import { NextFunction, Request, Response } from 'express';

export const catchAsyncError = async (
     req: Request,
     res: Response,
     next: NextFunction
) => {
     return (req: Request, res: Response, next: NextFunction) => {};
};
