const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/sit725db")
  .then(() => console.log("✅ MongoDB connected for seeding"))
  .catch((err) => console.log("MongoDB connection error:", err));


const EventSchema = new mongoose.Schema({
  title: String,
  location: String,
  date: String,
});

const Event = mongoose.model("events", EventSchema);

const sampleEvents = [
  { title: "Careers Expo", location: "Melbourne CBD", date: "2025-03-20" },
  { title: "Tech Bootcamp", location: "Deakin Burwood", date: "2025-04-12" },
  { title: "Startup Meetup", location: "Docklands", date: "2025-05-03" },
];

Event.insertMany(sampleEvents)
  .then(() => {
    console.log("✅ Events inserted");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Insert error:", err);
    mongoose.connection.close();
  });
