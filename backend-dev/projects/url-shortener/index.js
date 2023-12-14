const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const app = express();

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
