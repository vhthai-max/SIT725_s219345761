// routes/books.routes.js

const express = require("express");
const router = express.Router();
const booksController = require("../controllers/books.controller");

// GET /api/books
router.get("/books", booksController.getAllBooks);

// GET /api/books/:id
router.get("/books/:id", booksController.getBookById);

module.exports = router;
