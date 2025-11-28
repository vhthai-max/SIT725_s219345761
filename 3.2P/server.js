const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Static file handling
app.use(express.static(path.join(__dirname, "public")));

// REST API endpoint
app.get("/api/events", (req, res) => {
  res.json([
    { title: "Tech Networking Night", location: "Melbourne CBD", date: "2025-09-14" },
    { title: "Food Festival", location: "Queen Victoria Market", date: "2025-10-02" },
    { title: "Startup Pitch Day", location: "Deakin Burwood", date: "2025-11-05" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
