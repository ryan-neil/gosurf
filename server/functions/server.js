const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
// database
const connectDB = require('../db/connectDB');
// routes
const spotsRouter = require('../routes/spotsRoute');
const weatherRouter = require('../routes/weatherRoute');
const waveRouter = require('../routes/waveRoute');
const tidesRouter = require('../routes/tidesRoute');
const windRouter = require('../routes/windRoute');
const swellRouter = require('../routes/swellRoute');
// configuration files
const corConfig = require('../config/corsConfig');
const envConfig = require('../config/envConfig');
// middleware
const errorHandler = require('../middleware/errorHandler');

const app = express();

// allow request from frontend
app.use(cors(corConfig));
// handle parsing json
app.use(express.json());

// DJ, spin that sh*t...
connectDB(envConfig.DATABASE);

// serve routes with netlify redirects
app.use('/api/spots', spotsRouter);
app.use('/api/weather', weatherRouter);
app.use('/api/wave', waveRouter);
app.use('/api/tides', tidesRouter);
app.use('/api/wind', windRouter);
app.use('/api/swell', swellRouter);

// error handling
app.use(errorHandler);

module.exports.handler = serverless(app);
