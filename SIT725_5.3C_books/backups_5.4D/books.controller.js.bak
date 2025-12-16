const bookService = require('../services/books.service');

exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await bookService.getAllBooks();
    res.status(200).json({ statusCode: 200, data: books });
  } catch (err) {
    next(err);
  }
};

exports.getBookById = async (req, res, next) => {
  try {
    const book = await bookService.getBookById(req.params.id);
    if (!book) return res.sendStatus(404);
    res.status(200).json({ statusCode: 200, data: book });
  } catch (err) {
    next(err);
  }
};

