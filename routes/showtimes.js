const express = require('express');
const router = express.Router();
const { createShowtime, getShowtimes } = require('../controllers/showtimeController');

router.post('/', createShowtime);
router.get('/', getShowtimes);

module.exports = router;
