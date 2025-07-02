const express = require('express');
const router = express.Router();
const { Campus } = require('../models');

// GET /campus
router.get('/', async (req, res) => {
  try {
    const campuses = await Campus.findAll();
    res.json(campuses);
  } catch (error) {
    console.error('Error fetching campuses:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
