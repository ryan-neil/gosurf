const fetch = require('node-fetch');
const envConfig = require('../config/envConfig');
const getTodaysDate = require('../helpers/getTodaysDate');

// get wave and swell data from stormglass
const getWaveData = async (req, res) => {
  const { lat, lon } = req.query;
  const { todayHyphen } = getTodaysDate();
  const options = { method: 'GET', headers: { Authorization: envConfig.API_KEY } };
  const reqParams = ['waveHeight', 'wavePeriod'];
  const url = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lon}&params=${reqParams}&start=${todayHyphen}&end=${todayHyphen}T23:00`;

  try {
    // fetch data
    const response = await fetch(url, options);
    const data = await response.json();

    // clean the data
    const currentTime = new Date().getHours(); // get current times (military)
    const times = data.hours.map((hour) => hour.time);
    // set wave height data
    const hourlyWaveHeight = data.hours.map((hour) => hour.waveHeight.noaa);
    const currentWaveHeight = hourlyWaveHeight.filter((hour, idx) => idx === currentTime); // meters
    const minWaveHeight = Math.min(...hourlyWaveHeight);
    const maxWaveHeight = Math.max(...hourlyWaveHeight);
    // set wave period data
    const hourlyWavePeriod = data.hours.map((hour) => hour.wavePeriod.noaa);
    const currentWavePeriod = hourlyWavePeriod.filter((hour, idx) => idx === currentTime); // seconds

    // create our data object
    const dataObject = {
      waveHeight: {
        current: currentWaveHeight[0],
        hourly: hourlyWaveHeight,
        min: minWaveHeight,
        max: maxWaveHeight,
      },
      wavePeriod: {
        current: currentWavePeriod[0],
        hourly: hourlyWavePeriod,
      },
      times: times,
      remainingRequests: data.meta.dailyQuota - data.meta.requestCount,
    };

    // send data object back to client
    return res.json(dataObject);
  } catch (err) {
    res.status(500).json({
      message: 'Error fetching wave data',
      error: err,
    });
  }
};

module.exports = getWaveData;
