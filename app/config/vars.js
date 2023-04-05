// vars.js - Variables and Constants

// Imports
require("dotenv").config();

const vars = {
  appSettings: {
    env: process.env.NODE_ENV || "local",
    appName: process.env.APP_NAME || "js-boiler-api",
    port: process.env.PORT || "3000",
    url: process.env.URL || "http://localhost:3000",
  },
  databaseSettings: {
    // name: process.env.DB_NAME || "sportsradar_db",
    // user: process.env.DB_USER || "root",
    // password: process.env.DB_PASS || "root",
    // host: process.env.DB_HOST || "localhost",
    // log: process.env.DB_LOGGING == 'true',
  },
  log: {
    level: process.env.LOG_LEVEL || "info",
  },
  constants: {},
};

module.exports = vars;
