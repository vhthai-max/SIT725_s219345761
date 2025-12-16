const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const PORT = 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/booksDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('✅ Connected to MongoDB');
});

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
const bookRoutes = require('./routes/books.routes');
app.use('/api', bookRoutes);

// start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
