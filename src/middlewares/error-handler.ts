import express, {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from "express";
import ApiError from "../errors/ApiError";

export const errorHandlerMiddleware = (
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return ApiError.internalError();
};
