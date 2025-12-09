// controllers/books.controller.js

const bookService = require("../services/books.service");

const getAllBooks = (req, res) => {
  const allBooks = bookService.getAllBooks();
  res.json(allBooks);
};

const getBookById = (req, res) => {
  const id = req.params.id;
  const book = bookService.getBookById(id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.json(book);
};

module.exports = {
  getAllBooks,
  getBookById,
};
