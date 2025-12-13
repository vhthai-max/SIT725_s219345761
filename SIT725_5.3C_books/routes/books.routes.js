const express = require('express');
const router = express.Router();
const Controllers = require('../controllers');

// /api/books
router.get('/books', Controllers.bookController.getAllBooks);

// /api/books/:id
router.get('/books/:id', Controllers.bookController.getBookById);

// /api/integrity-check42 -> 204
router.get('/integrity-check42', (req, res) => res.sendStatus(204));

module.exports = router;

