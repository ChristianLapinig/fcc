const express = require("express");
const multer = require("multer");
const router = express.Router();

router.get("/timestamp/:date", require("./timestamp-microservice/timestamp"));
router.get("/request-parser/whoami", require("./request-header-parser/parser"));
router.post("/url-shortener/shorten", require("./url-shortener/urls"));
router.post("/files/metadata", multer().single("file"), require("./file-metadata-microservice/files"));

module.exports = router;
