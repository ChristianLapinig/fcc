const express = require("express");
const router = express.Router();

const MESSAGE_STYLE = process.env.MESSAGE_STYLE;
const MESSAGE = "Hello json";

// Serve JSON to a specific route
router.get("/hello/json", (req, res) => {
  res.json({
    message: MESSAGE_STYLE == "uppercase" ? MESSAGE.toUpperCase() : MESSAGE,
  });
});

// Chain Middleware to Create a Time Server
router.get("/chain-middleware/now", (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({
    time: req.time,
  });
});

module.exports = router;
