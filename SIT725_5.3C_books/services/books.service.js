const Book = require('../models/book.model');

async function getAllBooks() {
  return await Book.find({}, { __v: 0 });
}

async function getBookById(id) {
  return await Book.findOne({ id }, { __v: 0 });
}

module.exports = {
  getAllBooks,
  getBookById
};
