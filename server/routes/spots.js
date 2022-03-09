// Set the API routes

const express = require('express');
const router = express.Router();

// import spots controller functions
const { getAllSpots, addSpot } = require('../controllers/spotsController');

// get all spots
router.get('/', getAllSpots);

// add a spot
router.post('/', addSpot);

module.exports = router;
