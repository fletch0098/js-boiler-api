// Root Controller

// Imports
const service = require("../services/root.service");

// root route, app info
const root = (req, res, next) => {
  const data = service.root();
  return res.json(data);
};

// healthcheck
const health = (req, res, next) => {
  const data = service.health();
  return res.send(data);
};

// debug
const debug = (req, res, next) => {
  const data = service.debug();
  return res.json(data);
};

module.exports = {
  root,
  health,
  debug,
};
