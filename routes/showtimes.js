const express = require("express");
const router = express.Router();
const Showtime = require("../models/Showtime");

// Get showtimes for a specific movie
router.get("/:movieId", async (req, res) => {
  try {
    const showtimes = await Showtime.find({ movieId: req.params.movieId });
    res.json(showtimes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
