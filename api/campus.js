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

// Write a route to get a single campus by ID including its students
router.get('/:id', async (req, res) => {
  try {
    const campus = await Campus.findByPk(req.params.id, {
      include: ['students'] // Assuming 'students' is the association name
    });
    if (campus) {
      res.json(campus);
    } else {
      res.status(404).json({ error: 'Campus not found' });
    }
  } catch (error) {
    console.error('Error fetching campus:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /campus
router.post('/', async (req, res) => {
  try {
    const newCampus = await Campus.create(req.body);
    res.status(201).json(newCampus);
  } catch (error) {
    console.error('Error creating campus:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//DELETE /campus/:id
console.log('Deleting campus route initialized');
router.delete('/:id', async (req, res) => {
  try {
    const campus = await Campus.findByPk(req.params.id);
    if (campus) {
      await campus.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Campus not found' });
    }
  } catch (error) {
    console.error('Error deleting campus:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
