// Tides API routes
const express = require('express');
const getTidesData = require('../controllers/tidesController');

const router = express.Router();

router.get('/', getTidesData);

// frontend endpoint:
// /api/tides?stationId=1617760

module.exports = router;
