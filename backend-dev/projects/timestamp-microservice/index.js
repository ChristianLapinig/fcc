const express = require("express");

const PORT = process.env.PORT || 8080;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api", (req, res) => {
  res.json({
    name: "FCC Timestamp Microservice",
    description:
      "A microservice that returns a JSON object with a unix timestamp and a natural language date.",
  });
});

app.listen(PORT, () => {
  console.log(`Server now listening on port ${PORT}`);
});
