const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

router.post('/', async (req, res) => {
  try {
    const { checkin, checkout, person, roomType } = req.body;

    const booking = new Booking({ checkin, checkout, person, roomType });
    await booking.save();

    res.status(201).json({ message: 'Booking saved successfully' });
  } catch (error) {
    console.error('Booking save error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
