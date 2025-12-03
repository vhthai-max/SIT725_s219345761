const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// ---------- MIDDLEWARE ----------
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// ---------- MONGODB CONNECTION ----------
mongoose
  .connect("mongodb://127.0.0.1:27017/sit725db")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));


// ---------- SCHEMA & MODEL ----------
const EventSchema = new mongoose.Schema({
  title: String,
  location: String,
  date: String,
});

const Event = mongoose.model("events", EventSchema);

// ---------- REST API ENDPOINT ----------
app.get("/api/events", async (req, res) => {
  try {
    const events = await Event.find();
    res.json({
      statusCode: 200,
      data: events,
      message: "Events loaded from database",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      statusCode: 500,
      message: "Error fetching events",
    });
  }
});

// ---------- START SERVER ----------
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

