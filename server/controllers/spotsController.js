// Accessing data from MongoDB database

// get our spots database
const SpotModel = require('../models/Spots');

// get all spots from database
const getAllSpots = (req, res) => {
  SpotModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

// add a spot to the database
const addSpot = async (req, res) => {
  const spot = req.body;
  const newSpot = new SpotModel(spot);
  await newSpot.save();
  // return the new user back to the frontend
  res.json(spot);
};

module.exports = { getAllSpots, addSpot };
