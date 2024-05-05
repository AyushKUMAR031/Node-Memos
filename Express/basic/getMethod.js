const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");

//Get:
// - Used for retrieving data from the server and show it to client
// - Data in the Header part
// - Limited data capacity due to URL length restrictions.
// - Cached by browsers, so sensitive data should not be sent via GET.

app.get("/", (req, res) => {
  res.send("hello"); //sending response
});

app.get("/sub", (req, res) => {
  res.send(`<center><h1>This is the sub-section<h1></center>`); //sending html code
});

app.get("/section", (req, res) => {
  res.end(fs.readFileSync("./public/index.html").toString()); //sending file
});

//another way for the same file to be sent
app.get("/section2", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/search", (req, res) => {
  res.send(req.query);
});

app.get("/download", (req, res) => {
  res.download(path.join(__dirname, "trial.txt"));
});

app.listen(3000);
