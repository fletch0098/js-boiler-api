const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./app/swagger/swagger_output.json";
const endpointsFiles = [
  "./app/routes/routes.js",
  "./app/routes/root.routes.js",
  "./app/routes/v1/v1.routes.js",
];

swaggerAutogen(outputFile, endpointsFiles);
