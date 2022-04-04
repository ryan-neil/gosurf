const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
// database
const connectDB = require('../server/db/connectDB');
// routes
const spotsRouter = require('../server/routes/spotsRoute');
const weatherRouter = require('../server/routes/weatherRoute');
const waveRouter = require('../server/routes/waveRoute');
const tidesRouter = require('../server/routes/tidesRoute');
const windRouter = require('../server/routes/windRoute');
const swellRouter = require('../server/routes/swellRoute');
// configuration files
const corConfig = require('../server/config/corsConfig');
const envConfig = require('../server/config/envConfig');
// middleware
const errorHandler = require('../server/middleware/errorHandler');

const app = express();

// allow request from frontend
app.use(cors(corConfig));
// handle parsing json
app.use(express.json());

// DJ, spin that sh*t...
connectDB(envConfig.DATABASE);

// serve routes with netlify redirects
app.use('/.netlify/functions/api/spots', spotsRouter);
app.use('/.netlify/functions/api/weather', weatherRouter);
app.use('/.netlify/functions/api/wave', waveRouter);
app.use('/.netlify/functions/api/tides', tidesRouter);
app.use('/.netlify/functions/api/wind', windRouter);
app.use('/.netlify/functions/api/swell', swellRouter);

// error handling
app.use(errorHandler);

module.exports.handler = serverless(app);
