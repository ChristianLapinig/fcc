const express = require("express");
const router = express.Router();

// Route for "Start a Working Express Server"
router.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = router;
