const path = require("path");
const express = require("express");
const router = express.Router();

// Serve an HTML file 
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../views/index.html"));
});

router.get("/hello/json", (req, res) => {
  res.json({ message: "Hello json" });
});

module.exports = router;
