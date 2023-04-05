// logger.js - Logger: Winston logger

// Imports
const { createLogger, format, transports } = require("winston");
const { combine, timestamp, errors, json, colorize, printf } = format;
const util = require("util");
const { appSettings, log } = require("../config/vars");

// Create the logge rinstance
const logger = createLogger({
  level: log.level,
  format: combine(
    errors({ stack: true }), // use errors format
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    json() // use json
  ),
  defaultMeta: { app: appSettings.appName }, // Default logging meta
  transports: [
    // Add a silent logger for testing
    new transports.Console({ silent: true }),
  ],
});

// logger.info(`${appSettings.appName} ${appSettings.env} server started on: ${appSettings.url}`);
// 2023-04-05 15:02:53 [app] info: js-boiler-api local server started on: http://localhost:3000

// logger.debug('Im logging data', { data: { foo: 'bar' } })
// 2023-04-05 15:02:53 [app] debug: Im logging data
// { foo: 'bar' }

// logger.warn(error)
// 2023-04-05 15:02:57 [error] warn: Error Message
//  [stack]

const myFormat = printf(
  ({ level, message, module, timestamp, data, stack, internalCode, app }) => {
    if (stack) {
      // Error
      return `${timestamp} [${module}] ${level}: ${internalCode} - ${message} \n ${util.format(
        "%o",
        stack
      )}`;
    }
    if (data) {
      // Data log
      return `${timestamp} [${
        module ? module : app
      }] ${level}: ${message} \n ${util.format("%o", data)}`;
    }
    // Text log
    return `${timestamp} [${module}] ${level}: ${message}`;
  }
);

// if not testing, add file loggers
if (appSettings.env != "test") {
  logger.add(
    new transports.File({
      filename: "logs/error.log",
      level: "warn",
    })
  );
  logger.add(
    new transports.File({
      filename: "logs/combined.log",
    })
  );
}

// If we're not in production then log to the `console`
if (appSettings.env !== "production" && appSettings.env !== "test") {
  logger.add(
    new transports.Console({
      format: combine(colorize(), myFormat),
    })
  );
}

// Create a child instance
const localLogger = (module) => logger.child({ module });

module.exports = localLogger;
