const express = require("express");

const PORT = process.env.PORT || 8080;
const app = express();

// Express configuration
app.use("/public", express.static(__dirname + "/public"));

// Index page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// API routes
app.get("/api", (req, res) => {
  res.json({
    name: "FCC Timestamp Microservice",
    description:
      "A microservice that returns a JSON object with a unix timestamp and a natural language date.",
  });
});

app.get("/api/:date", (req, res) => {
  let date;

  if (isNaN(req.params.date)) {
    date = new Date(req.params.date);
  } else {
    date = new Date(parseInt(req.params.date));
  }

  if (date.toString() === "Invalid Date") {
    res.json({
      error: "Invalid Date",
      value: req.params.date,
    });
  }

  res.json({
    epoch: date.getTime(),
    utc: date.toUTCString(),
  });
});

app.listen(PORT, () => {
  console.log(`Server now listening on port ${PORT}`);
});
