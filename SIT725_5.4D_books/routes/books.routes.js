const express = require('express');
const router = express.Router();

const booksController = require('../controllers/books.controller');

// Existing GET routes
router.get('/api/books', booksController.getAllBooks);
router.get('/api/books/:id', booksController.getBookById);

// Safe-write routes (5.4D)
router.post('/api/books', booksController.createBook);
router.put('/api/books/:id', booksController.updateBook);

module.exports = router;
