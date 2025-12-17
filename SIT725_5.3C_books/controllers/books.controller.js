const booksService = require('../services/books.service');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await booksService.getAllBooks();
    return res.status(200).json({ statusCode: 200, data: books });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: 'Server error' });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await booksService.getBookById(req.params.id);
    if (!book) {
      return res.status(404).json({ statusCode: 404, message: 'Book not found' });
    }
    return res.status(200).json({ statusCode: 200, data: book });
  } catch (err) {
    return res.status(500).json({ statusCode: 500, message: 'Server error' });
  }
};
