const express = require('express');
const getWindData = require('../controllers/windController');

const router = express.Router();

router.get('/', getWindData);

// frontend endpoint:
// /api/wind?stationId=1617760

module.exports = router;
