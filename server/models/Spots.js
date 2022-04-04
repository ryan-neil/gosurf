// Define the structure of the Spots model

const mongoose = require('mongoose');

const reqString = {
  type: String,
  required: true,
};

const reqNumber = {
  type: Number,
  required: true,
};

// define the schema
const SpotSchema = new mongoose.Schema({
  name: reqString,
  spot_id: reqNumber,
  slug: reqString,
  station_id: reqNumber,
  buoy_id: reqNumber,
  lat: reqNumber,
  lon: reqNumber,
  timezone: reqString,
  timezone_offset: reqNumber,
  location: {
    city: reqString,
    state: reqString,
    county: reqString,
    country: reqString,
  },
  ideal_conditions: {
    swell_direction: reqString,
    wind: reqString,
    surf_height: reqString,
    tide: reqString,
  },
  guide: {
    facing: reqString,
    skill: [reqString],
    vibe: [reqString],
    crowd: [reqString],
    seabed: [reqString],
    boards: [reqString],
    images: [String],
  },
});

const SpotsModel = mongoose.model('spots', SpotSchema);
module.exports = SpotsModel;
