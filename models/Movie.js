// models/Movie.js
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  genre: [String],
  language: String,
  duration: Number,
  rating: Number,
  posterUrl: String,
});

module.exports = mongoose.model("Movie", movieSchema);
