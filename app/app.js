// app.js - api server

// Imports
const express = require("express");
const cors = require("cors");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const { appSettings } = require("./config/vars");
const logger = require("./utilities/logger")("app");
const ApiError = require("./utilities/api.error");
const routes = require("./routes/routes");
const notFound = require("./middleware/not-found.middleware");
const errorHandler = require("./middleware/error-handler.middleware");

// Start the api
const startApi = () => {
  // Api server instance
  const app = express();

  // Cors
  app.use(cors());

  // Accept JSON
  app.use(express.json());

  // Routes
  app.use("/", routes);

  // Not found 404
  app.use(notFound);

  // Error handler
  app.use(errorHandler);

  // Start the server
  app.listen(appSettings.port, () => {
    // Log
    logger.info(
      `${appSettings.appName} ${appSettings.env} server started on: ${appSettings.url}`
    );
  });
};
module.exports = { startApi };
