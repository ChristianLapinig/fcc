const express = require("express");
const router = express.Router();

router.get("/timestamp/:date", require("./timestamp-microservice/timestamp"));
router.get("/request-parser/whoami", require("./request-header-parser/parser"));

module.exports = router;
