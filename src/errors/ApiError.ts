class ApiError {
  message: string;
  statusCode: number;

  constructor(message: string, statusCode: number) {
    this.message = message;
    this.statusCode = statusCode;
  }

  static notFound(): ApiError {
    return new ApiError("Requested resource not found", 404);
  }

  static badRequest(message: string): ApiError {
    return new ApiError(message, 400);
  }

  static internalError(): ApiError {
    return new ApiError("Internal server error", 500);
  }
}

export default ApiError;
