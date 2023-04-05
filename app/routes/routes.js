// Imports
const express = require("express");
const rootRoutes = require("./root.routes");
const v1Routes = require("./v1/v1.routes");

const router = express.Router();

// root
router.use("/", rootRoutes);

// v1 routes
router.use("/v1", v1Routes);

module.exports = router;
