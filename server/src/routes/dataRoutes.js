const express = require('express');
const router = express.Router();
const Data = require('../models/Data');

// @route   POST /api/data
// @desc    Save data to database
router.post('/', async (req, res) => {
  try {
    const { data } = req.body;
    await Data.insertMany(data);
    console.log('Data saved to MongoDB');
    res.status(200).json({ message: 'Data saved to MongoDB' });
  } catch (error) {
    console.error('Error saving data to MongoDB:', error);
    res.status(500).json({ error: error.message || 'Error saving data to MongoDB' });
  }
});

// @route   GET /api/data
// @desc    Get all data
router.get('/', async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: error.message || 'Error fetching data' });
  }
});

module.exports = router;
