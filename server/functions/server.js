const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
// database
const connectDB = require('../db/connectDB');
// configuration files
const corConfig = require('../config/corsConfig');
const envConfig = require('../config/envConfig');
// middleware
const rateLimit = require('../middleware/rateLimit');
// const apiCache = require('../middleware/apiCache');
const errorHandler = require('../middleware/errorHandler');

const app = express();

// middleware
app.use(cors(corConfig)); // allow request from frontend
app.use(express.json()); // parsing json
app.use(rateLimit); // rate limiting
app.set('trust proxy', 1); // for netlify (rate limiting)
// app.use(apiCache('15 minutes')); // api caching

// DJ, spin that sh*t...
connectDB(envConfig.DATABASE_URI);

// serve routes with netlify redirects
app.use('/api/spots', require('../routes/spotsRoute'));
app.use('/api/weather', require('../routes/weatherRoute'));
app.use('/api/wave', require('../routes/waveRoute'));
app.use('/api/tides', require('../routes/tidesRoute'));
app.use('/api/wind', require('../routes/windRoute'));
app.use('/api/swell', require('../routes/swellRoute'));

// error handling
app.use(errorHandler);

module.exports.handler = serverless(app);
