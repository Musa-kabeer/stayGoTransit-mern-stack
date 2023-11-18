export class AppError extends Error {
     constructor(
          public message: string,
          public statusCode: number,
          public stack?: any
     ) {
          super(message);
          this.statusCode = statusCode || 500;
          this.stack = Error.captureStackTrace(this, this.constructor);
     }
}
