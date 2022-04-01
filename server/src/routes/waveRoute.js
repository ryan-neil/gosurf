// Wave and Swell routes
const express = require('express');
const getWaveData = require('../controllers/waveController');

const router = express.Router();

router.get('/', getWaveData);

// frontend endpoint:
// /api/wave?lat=19.7558&lon=-155.0908

module.exports = router;
