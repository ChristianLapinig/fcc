const express = require("express");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 8080;
const app = express();

// Mongo connection for projects and curriculum that require it
connectDB();

// Configure express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

/* Backend dev and API routes */
// Pages
app.get("/url-shortener", (req, res) => {
  res.sendFile(__dirname + "/views/url-shortener.html");
});
app.get("/file-metadata", (req, res) => {
  res.sendFile(__dirname + "/views/file-metadata.html");
});
// Rediret to original url when user visits shortened url
app.get("/:urlId", require("./backend-dev/projects/url-shortener/redirect"));
app.use("/api", require("./backend-dev/projects/router")); // Projects

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
