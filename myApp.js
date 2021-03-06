require("dotenv").config();
var express = require("express");
var app = express();
var bGround = require("fcc-express-bground");

console.log("Hello World");
bGround.log("Hello World");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function (req, res) {
  res.json({ message: "Hello json" });
});

app.get("/json", function (req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "hello json" });
  }
});

module.exports = app;
