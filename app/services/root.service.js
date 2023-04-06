// Root Service

// Imports
const { appSettings } = require("../config/vars");
const ApiError = require("../utilities/api.error");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
var pjson = require("../../package.json");

// app info
const root = () => {
  const data = {
    app: appSettings.appName,
    version: pjson.version,
    env: appSettings.env,
    date: new Date(),
    hostUrl: appSettings.hostUrl,
  };
  return data;
};

// healthcheck
const health = () => {
  return "OK";
};

// debug
const debug = () => {
  const data = {
    debug: "OK",
  };

  return data;
};

// error
const error = () => {
  throw new ApiError(
    ReasonPhrases.IM_A_TEAPOT,
    "0418",
    StatusCodes.IM_A_TEAPOT,
    true
  );
};

// internalError
const internalError = () => {
  throw new Error("Internal Error");
};

module.exports = {
  root,
  health,
  debug,
  error,
  internalError,
};
