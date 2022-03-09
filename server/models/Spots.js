// Define the structure of the Spots model

const mongoose = require('mongoose');

// define the schema
const SpotSchema = new mongoose.Schema({
  // data...
});

const SpotsModel = mongoose.model('spots', SpotSchema);
module.exports = SpotsModel;
