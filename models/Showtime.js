const mongoose = require("mongoose");

const showtimeSchema = new mongoose.Schema({
  movieId: { type: mongoose.Schema.Types.ObjectId, ref: "Movie" },
  time: Date,
});

module.exports = mongoose.model("Showtime", showtimeSchema);
