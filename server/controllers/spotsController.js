// Accessing data from MongoDB database
const SpotModel = require('../models/Spots');
const db = require('../db/db');

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

// get a single spot from database
const getSpot = (req, res) => {
  const { slug } = req.params;

  SpotModel.findOne({ slug: slug }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

// add all spots to the database
const addAllSpots = (req, res) => {
  SpotModel.insertMany(db, (err, result) => {
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
  SpotModel.insertOne(spot, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
  // return the new user back to the frontend
  res.json(spot);
};

// delete all spots from the database
const deleteAllSpots = (req, res) => {
  SpotModel.deleteMany({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

module.exports = { getAllSpots, getSpot, addAllSpots, addSpot, deleteAllSpots };
