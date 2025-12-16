const booksService = require('../services/books.service');

// ===== GET endpoints =====
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

// ===== SAFE WRITES =====
exports.createBook = async (req, res) => {
  try {
    const created = await booksService.createBookSafe(req.body);
    return res.status(201).json({ statusCode: 201, data: created });
  } catch (err) {
    if (err && err.code === 11000) {
      return res.status(409).json({ statusCode: 409, message: 'Duplicate id' });
    }

    if (err && err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ statusCode: 400, message: 'Validation failed', errors });
    }

    if (err && err.name === 'BadRequest') {
      return res.status(400).json({ statusCode: 400, message: err.message });
    }

    return res.status(500).json({ statusCode: 500, message: 'Server error' });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const updated = await booksService.updateBookSafe(req.params.id, req.body);

    if (!updated) {
      return res.status(404).json({ statusCode: 404, message: 'Book not found' });
    }

    return res.status(200).json({ statusCode: 200, data: updated });
  } catch (err) {
    if (err && err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ statusCode: 400, message: 'Validation failed', errors });
    }

    if (err && err.name === 'BadRequest') {
      return res.status(400).json({ statusCode: 400, message: err.message });
    }

    return res.status(500).json({ statusCode: 500, message: 'Server error' });
  }
};
