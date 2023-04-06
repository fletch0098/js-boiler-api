// server.js - Start the express server and listen for requests

// Imports
const app = require("./app");
const { appSettings } = require("./config/vars");
const logger = require("./utilities/logger")("server");

// Start the express server and listen for requests
const server = () => {
  // Start the server
  app.listen(appSettings.port, () => {
    // Log server
    logger.info(
      `${appSettings.appName} ${appSettings.env} server started on: ${appSettings.url}`
    );

    // log docs
    logger.info(`Api docs: ${appSettings.url}/doc`);
  });
};

module.exports = server;
