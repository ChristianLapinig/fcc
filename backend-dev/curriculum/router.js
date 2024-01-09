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

module.exports = router;
