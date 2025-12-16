const mongoose = require('mongoose');

const currentYear = new Date().getFullYear();

const bookSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: [true, 'id is required'],
      trim: true,
      minlength: [2, 'id must be at least 2 characters'],
      maxlength: [20, 'id must be at most 20 characters'],
      match: [/^[a-zA-Z0-9_-]+$/, 'id must be alphanumeric and may include _ or -'],
      immutable: true,
      unique: true
    },
    title: {
      type: String,
      required: [true, 'title is required'],
      trim: true,
      minlength: [2, 'title must be at least 2 characters'],
      maxlength: [120, 'title must be at most 120 characters']
    },
    author: {
      type: String,
      required: [true, 'author is required'],
      trim: true,
      minlength: [2, 'author must be at least 2 characters'],
      maxlength: [80, 'author must be at most 80 characters']
    },
    year: {
      type: Number,
      required: [true, 'year is required'],
      min: [1450, 'year must be >= 1450'],
      max: [currentYear, `year must be <= ${currentYear}`],
      validate: {
        validator: Number.isInteger,
        message: 'year must be an integer'
      }
    },
    genre: {
      type: String,
      required: [true, 'genre is required'],
      trim: true,
      minlength: [3, 'genre must be at least 3 characters'],
      maxlength: [40, 'genre must be at most 40 characters']
    },
    summary: {
      type: String,
      required: [true, 'summary is required'],
      trim: true,
      minlength: [10, 'summary must be at least 10 characters'],
      maxlength: [600, 'summary must be at most 600 characters']
    },
    price: {
      type: mongoose.Schema.Types.Decimal128,
      required: [true, 'price is required'],
      validate: {
        validator: (v) => {
          if (v == null) return false;
          const num = parseFloat(v.toString());
          return Number.isFinite(num) && num > 0;
        },
        message: 'price must be a positive number'
      }
    },
    currency: {
      type: String,
      default: 'AUD',
      enum: {
        values: ['AUD'],
        message: 'currency must be AUD'
      }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Book', bookSchema);

