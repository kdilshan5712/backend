const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: [String],
  language: String,
  duration: Number,
  description: String,
  posterUrl: String,
  releaseDate: Date,
  rating: Number
});

module.exports = mongoose.model('Movie', movieSchema);
