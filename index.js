const express = require("express");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 8080;
const app = express();

// Mongo connection for projects and curriculum that require it
connectDB();

// Configure express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static("public")); // Serve static assets

/* Pages and other routes */
app.get("/url-shortener", (req, res) => {
  res.sendFile(__dirname + "/views/url-shortener.html");
});
app.get("/file-metadata", (req, res) => {
  res.sendFile(__dirname + "/views/file-metadata.html");
});
// Rediret to original url when user visits shortened url
app.get("/:urlId", require("./backend-dev/projects/url-shortener/redirect"));

/* backend dev API curriculum and projects */
app.use("/", require("./backend-dev/curriculum/router")); // Curriculum
app.use("/api", require("./backend-dev/projects/router")); // Projects

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
