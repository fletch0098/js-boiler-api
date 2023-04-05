// app.js - api server

// Imports
const express = require("express");
const cors = require("cors");

const { appSettings } = require("./config/vars");
const logger = require("./utilities/logger")("app");

const startApi = () => {
  // Api server instance
  const app = express();

  // Cors
  app.use(cors());

  // Accept JSON
  app.use(express.json());

  // Routes

  // Healthcheck
  app.get("/", (req, res) => {
    res.send("OK");
  });

  // Start the server
  app.listen(appSettings.port, () => {
    // Log
    logger.info(
      `${appSettings.appName} ${appSettings.env} server started on: ${appSettings.url}`
    );
  });
};
module.exports = { startApi };
