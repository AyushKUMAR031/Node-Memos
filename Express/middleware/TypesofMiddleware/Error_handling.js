//Error Handling Middleware

// - Error handling middleware is used to handle errors that occur during the request-response cycle.
const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.status(404).send("Page not found");
  next();
});

app.get("/", (req, res) => {
  throw new Error("Something went wrong"); //generating error
});

app.listen(8000);
