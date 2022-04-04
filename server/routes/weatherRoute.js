// Wind API routes
const express = require('express');
const getWeatherData = require('../controllers/weatherController');

const router = express.Router();

router.get('/', getWeatherData);

// frontend endpoint:
// /api/weather?stationId=1617760

module.exports = router;
