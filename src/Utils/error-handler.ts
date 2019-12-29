import { Response, NextFunction, Request } from "express";

export default function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  const { message } = err;
  res.status(500).json({
    "error": message
  });
  next();
};
