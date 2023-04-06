const express = require("express");
const controller = require("../controllers/root.controller");

const router = express.Router();

// root /
router.get("/", controller.root);

// healthcheck /health
router.get("/health", controller.health);

// debug /debug
router.get("/debug", controller.debug);

// error /error
router.get("/error", controller.error);

// error /internal-error
router.get("/internal-error", controller.internalError);

module.exports = router;
