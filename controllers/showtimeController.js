const Showtime = require('../models/Showtime');

const createShowtime = async (req, res) => {
  const { movieId, time, screen, availableSeats } = req.body;

  try {
    const newShowtime = new Showtime({ movieId, time, screen, availableSeats });
    await newShowtime.save();
    res.status(201).json({ message: 'Showtime created successfully', showtime: newShowtime });
  } catch (error) {
    console.error('Error creating showtime:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getShowtimes = async (req, res) => {
  try {
    const showtimes = await Showtime.find().populate('movieId');
    res.status(200).json(showtimes);
  } catch (error) {
    console.error('Error fetching showtimes:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createShowtime, getShowtimes };
