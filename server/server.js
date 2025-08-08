const express = require('express');
const app = express();
const cors = require('cors');

var taskRoutes = require("./routes/taskRoutes")
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const corsOptions = {
    origin: ["http://localhost:5173"]
}

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use("/api/tasks", taskRoutes);

app.listen(8080, () => {
    console.log("server started on port 8080");
});