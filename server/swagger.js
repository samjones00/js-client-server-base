const swaggerJsDoc = require('swagger-jsdoc');

const swaggerSpecs = swaggerJsDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Tasks API",
      version: "1.0.0",
      description: "A simple Express Library API"
    },
    servers: [
      {
        url: "http://localhost:8080",
        description: "My API Documentation",
      },
    ],
  },
  apis: ["./routes/taskRoutes.js"]
});

module.exports = swaggerSpecs;