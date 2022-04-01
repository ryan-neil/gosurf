// Spots API routes
const express = require('express');
const {
  getAllSpots,
  getSpot,
  addAllSpots,
  addSpot,
  deleteAllSpots,
} = require('../controllers/spotsController');

const router = express.Router();

router.get('/', getAllSpots);
router.get('/:id', getSpot);
router.post('/addAllSpots', addAllSpots);
router.post('/addSpot', addSpot);
router.delete('/deleteAllSpots', deleteAllSpots);

module.exports = router;
