// Configure our CORS object
const envConfig = require('./envConfig');

// define domains allowed to access API
// *REMOVE* development urls for prod
const whitelist = [
  'https://www.gosurf.io', // production domain
  `http://localhost:${envConfig.port}`, // development domain
  'http://localhost:3000', // react domain
];

// define the Cross Origin Resource Sharing options
const corsConfig = {
  // origin represents whoever sent the request (like google.com)
  origin: (origin, callback) => {
    // *REMOVE*: '!origin' for prod
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      // if domain is in whitelist, let it pass
      callback(null, true);
    } else {
      // if domain is not whitelisted, throw an error
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsConfig;
