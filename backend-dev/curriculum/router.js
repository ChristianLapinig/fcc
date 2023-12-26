const express = require("express");
const router = express.Router();

// Route for "Start a Working Express Server"
router.get("/", (req, res) => {
  res.send("Hello Express");
});

module.exports = router;
