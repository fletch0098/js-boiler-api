class ApiError extends Error {
  constructor(
    message,
    internalCode = "0500",
    httpStatus = 500,
    isPublic = false
  ) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.httpStatus = httpStatus;
    this.internalCode = internalCode;
    this.isPublic = isPublic;
  }
}

module.exports = ApiError;
