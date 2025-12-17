const Book = require('../models/book.model');

const ALLOWED_FIELDS = ['id', 'title', 'author', 'year', 'genre', 'summary', 'price', 'currency'];

function findExtraFields(payload) {
  return Object.keys(payload).filter((k) => !ALLOWED_FIELDS.includes(k));
}

function pickAllowed(payload) {
  const clean = {};
  for (const k of ALLOWED_FIELDS) {
    if (payload[k] !== undefined) clean[k] = payload[k];
  }
  return clean;
}

// ===== READS (keep same output style as your current API) =====
async function getAllBooks() {
  return await Book.find({}, { __v: 0 });
}

async function getBookById(id) {
  return await Book.findOne({ id }, { __v: 0 });
}

// ===== SAFE WRITES (5.4D) =====
async function createBookSafe(payload) {
  const extra = findExtraFields(payload);
  if (extra.length > 0) {
    const err = new Error(`Unexpected fields: ${extra.join(', ')}`);
    err.name = 'BadRequest';
    throw err;
  }

  const clean = pickAllowed(payload);
  const created = await Book.create(clean); // schema validation triggers here
  return created;
}

async function updateBookSafe(id, payload) {
  const extra = findExtraFields(payload);
  if (extra.length > 0) {
    const err = new Error(`Unexpected fields: ${extra.join(', ')}`);
    err.name = 'BadRequest';
    throw err;
  }

  // id is immutable
  if (payload.id !== undefined && payload.id !== id) {
    const err = new Error('id is immutable and cannot be changed');
    err.name = 'BadRequest';
    throw err;
  }

  const clean = pickAllowed(payload);
  delete clean.id;

  const updated = await Book.findOneAndUpdate(
    { id },
    { $set: clean },
    { new: true, runValidators: true, context: 'query' }
  );

  return updated; // can be null if not found
}

module.exports = {
  getAllBooks,
  getBookById,
  createBookSafe,
  updateBookSafe
};
