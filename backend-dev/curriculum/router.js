const path = require("path");
const express = require("express");
require("dotenv").config();

const MESSAGE_STYLE = process.env.MESSAGE_STYLE;
const MESSAGE = "Hello json";
const router = express.Router();

// Serve an HTML file 
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../views/index.html"));
});

/*
Serve JSON on a Specific Route
Use the .env File
*/
router.get("/hello/json", (req, res) => {
  res.json({ message: MESSAGE_STYLE === "uppercase" ? MESSAGE.toUpperCase() : MESSAGE });
});

// Chain Middleware to Create a Time Server
router.get("/chain-middleware/now", (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({ time: req.time });
});

// Get Route Parameter Input from the Client
router.get("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word });
});

module.exports = router;
