const express = require("express");

const PORT = process.env.PORT || 8080;
const app = express();

// Configure express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Backend dev and API routes
app.use("/api", require("./backend-dev/projects/router"));

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
