const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// POST /api/movies
router.post('/', async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
