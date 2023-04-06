// app.js - api server

// Imports
const express = require("express");
const cors = require("cors");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const { appSettings } = require("./config/vars");
const logger = require("./utilities/logger")("app");
const routes = require("./routes/routes");
const notFound = require("./middleware/not-found.middleware");
const errorHandler = require("./middleware/error-handler.middleware");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger/swagger_output.json");

// Start the api
const startApi = () => {
  // Api server instance
  const app = express();

  // Cors
  app.use(cors());

  // Accept JSON
  app.use(express.json());

  // Swagger docs
  app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

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
    logger.info(`Api docs: ${appSettings.url}/doc`);
  });
};
module.exports = { startApi };
