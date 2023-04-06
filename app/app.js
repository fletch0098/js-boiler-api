// app.js - api server

// Imports
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const routes = require("./routes/routes");
const notFound = require("./middleware/not-found.middleware");
const errorHandler = require("./middleware/error-handler.middleware");
const swaggerFile = require("./swagger/swagger_output.json");

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

module.exports = app;
