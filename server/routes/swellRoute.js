// Wave and Swell routes
const express = require('express');
const getSwellData = require('../controllers/swellController');

const router = express.Router();

router.get('/', getSwellData);

// frontend endpoint:
// /api/swell?lat=19.7558&lon=-155.0908

module.exports = router;
