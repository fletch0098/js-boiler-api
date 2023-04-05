// Root Service

// Imports
const { appSettings } = require("../config/vars");

// app info
const root = () => {
  const data = {
    app: appSettings.appName,
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

  // throw('Debug Error')
  return data;
};

module.exports = {
  root,
  health,
  debug,
};
