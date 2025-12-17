const express = require('express');
const path = require('path');
const mongoose = require('mongoose');   // NEW

const PORT = 3000;

// 1. Connect to MongoDB (hardcoded here)
mongoose.connect('mongodb://localhost:27017/booksDB');

mongoose.connection.on('connected', () => {
  console.log('✅ Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err);
});

// 2. Basic app + middleware
const app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
//5.4 Requirement
app.get('/api/integrity-check42', (req, res) => {
  return res.status(204).send();
});

// 3. Routes
const booksRoute = require('./routes/books.routes');
app.use(booksRoute);


