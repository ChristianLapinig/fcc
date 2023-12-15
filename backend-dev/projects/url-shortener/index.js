const express = require("express");
const connectDB = require("./config/db");
const indexRouter = require('./routes/index');
const urlShortenerRouter = require('./routes/urls');
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const app = express();

// Connect to MongoDB
connectDB();

// Express configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Routes
app.use("/", indexRouter);
app.use("/api/urls", urlShortenerRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
