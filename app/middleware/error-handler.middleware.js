// error-handler.middleware.js - Catch and handle all errors

// Imports
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const ApiError = require("../utilities/api.error");
const logger = require("../utilities/logger")("error");

// Middleware
const middleware = (err, req, res, next) => {
  // Log the error
  logger.warn(err);
  if (err instanceof ApiError) {
    // Intentional error, log with details
    res
      .status(err.httpStatus)
      .json({ code: err.internalCode, message: err.message });
  } else {
    // Unknown error
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ code: "0500", message: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }
};

module.exports = middleware;
