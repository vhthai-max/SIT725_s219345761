// index.js

const express = require("express");
const path = require("path");
const booksRoutes = require("./routes/books.routes");

const app = express();
const PORT = 3000;

// Serve static files from /public
app.use(express.static(path.join(__dirname, "public")));

// Mount /api routes
app.use("/api", booksRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
