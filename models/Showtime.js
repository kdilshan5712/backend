const mongoose = require('mongoose');

const showtimeSchema = new mongoose.Schema({
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    required: true
  },
  time: {
    type: Date,
    required: true
  },
  screen: {
    type: String,
    required: true
  },
  availableSeats: {
    type: Number,
    required: true,
    min: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Showtime', showtimeSchema);
