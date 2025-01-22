import express from "express";
import colors from "colors";
import dotenv from "dotenv";

// configure env
dotenv.config();

// create express app
const app = express();

// define a simple route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app project</h1>");
});

// define the port
const PORT = process.env.PORT || 1404;

// start the server
app.listen(PORT, () => {
  console.log(
    `Server Running in ${process.env.DEV_MODE} mode on port ${PORT}`.bgMagenta
      .white
  );
});

// handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
