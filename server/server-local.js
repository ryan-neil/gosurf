require('dotenv').config();
const express = require('express');
const cors = require('cors');
// database
const connectDB = require('./db/connectDB');
// configuration files
const corConfig = require('./config/corsConfig');
const envConfig = require('./config/envConfig');
// middleware
const errorHandler = require('./middleware/errorHandler');

const app = express();

// allow request from frontend
app.use(cors(corConfig));
// handle parsing json
app.use(express.json());

// serve routes
app.use('/api/spots', require('./routes/spotsRoute'));
app.use('/api/weather', require('./routes/weatherRoute'));
app.use('/api/wave', require('./routes/waveRoute'));
app.use('/api/tides', require('./routes/tidesRoute'));
app.use('/api/wind', require('./routes/windRoute'));
app.use('/api/swell', require('./routes/swellRoute'));

// error handling
app.use(errorHandler);

// DJ, spin that sh*t...
const start = async () => {
  const PORT = 9001;
  try {
    await connectDB(envConfig.DATABASE_URI);
    app.listen(PORT, () => {
      console.log(
        `Database successfully connected. Server is running on: http://localhost:${PORT}`
      );
    });
  } catch (err) {
    console.log(err.message);
  }
};
start();
