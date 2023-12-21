const express = require("express");
const router = express.Router();

router.use("/", require("./timestamp-microservice/timestamp"));

module.exports = router;
