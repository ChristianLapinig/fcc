const express = require("express");

const PORT = process.env.PORT || 8080;
const app = express();

// Express configuration
app.use("/public", express.static(__dirname + "/public"));

// HTML routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// API routes
app.get("/api/whoami", (req, res) => {
  res.json({
    ipaddress: req.ip,
    host: req.hostname,
    language: req.headers["accept-language"],
    userAgent: req.headers["user-agent"],
    accept: req.headers["accept"],
    acceptEncoding: req.headers["accept-encoding"],
    connection: req.headers["connection"],
    cookie: req.headers["cookie"],
    cacheControl: req.headers["cache-control"],
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
