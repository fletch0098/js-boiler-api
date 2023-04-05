// not-found.middleware.js - Catch all unknown routes and throw 404 error

// Imports
const { StatusCodes } = require("http-status-codes");
const apiError = require("../utilities/api.error");

// Middleware
const middleware = (req, res, next) => {
  next(
    new apiError(
      `Error: Requested resource at ${req.originalUrl} not found`,
      "0404",
      StatusCodes.NOT_FOUND
    )
  );
};

module.exports = middleware;
