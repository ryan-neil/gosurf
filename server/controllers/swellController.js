const fetch = require('node-fetch');
const envConfig = require('../config/envConfig');
const getTodaysDate = require('../helpers/getTodaysDate');

const getSwellData = async (req, res) => {
  const { lat, lon } = req.query;
  const { todayHyphen } = getTodaysDate();
  const options = { method: 'GET', headers: { Authorization: envConfig.API_KEY } };
  const reqParams = [
    'swellHeight',
    'swellDirection',
    'swellPeriod',
    'secondarySwellHeight',
    'secondarySwellDirection',
    'secondarySwellPeriod',
  ];
  const url = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lon}&params=${reqParams}&start=${todayHyphen}&end=${todayHyphen}T23:00`;

  try {
    // fetch data
    const response = await fetch(url, options);
    const data = await response.json();

    // clean the data
    const currentTime = new Date().getHours(); // get current times (military)
    const times = data.hours.map((hour) => hour.time);

    // set swell data
    const hourlyPrimarySwellDirection = data.hours.map((hour) => hour.swellDirection.noaa);
    const currentPrimarySwellDirection = hourlyPrimarySwellDirection.filter(
      (hour, idx) => idx === currentTime
    );
    const hourlyPrimarySwellHeight = data.hours.map((hour) => hour.swellHeight.noaa);
    const currentPrimarySwellHeight = hourlyPrimarySwellHeight.filter(
      (hour, idx) => idx === currentTime
    );
    const hourlyPrimarySwellPeriod = data.hours.map((hour) => hour.swellPeriod.noaa);
    const currentPrimarySwellPeriod = hourlyPrimarySwellPeriod.filter(
      (hour, idx) => idx === currentTime
    );
    const hourlySecondarySwellDirection = data.hours.map(
      (hour) => hour.secondarySwellDirection.noaa
    );
    const currentSecondarySwellDirection = hourlySecondarySwellDirection.filter(
      (hour, idx) => idx === currentTime
    );
    const hourlySecondarySwellHeight = data.hours.map((hour) => hour.secondarySwellHeight.noaa);
    const currentSecondarySwellHeight = hourlySecondarySwellHeight.filter(
      (hour, idx) => idx === currentTime
    );
    const hourlySecondarySwellPeriod = data.hours.map((hour) => hour.secondarySwellPeriod.noaa);
    const currentSecondarySwellPeriod = hourlySecondarySwellPeriod.filter(
      (hour, idx) => idx === currentTime
    );

    // create our data object
    const dataObject = {
      primarySwellDirection: {
        hourly: hourlyPrimarySwellDirection,
        current: currentPrimarySwellDirection[0],
      },
      primarySwellHeight: {
        hourly: hourlyPrimarySwellHeight,
        current: currentPrimarySwellHeight[0],
      },
      primarySwellPeriod: {
        hourly: hourlyPrimarySwellPeriod,
        current: currentPrimarySwellPeriod[0],
      },
      secondarySwellDirection: {
        hourly: hourlySecondarySwellDirection,
        current: currentSecondarySwellDirection[0],
      },
      secondarySwellHeight: {
        hourly: hourlySecondarySwellHeight,
        current: currentSecondarySwellHeight[0],
      },
      secondarySwellPeriod: {
        hourly: hourlySecondarySwellPeriod,
        current: currentSecondarySwellPeriod[0],
      },
      times: times,
      remainingRequests: data.meta.dailyQuota - data.meta.requestCount,
    };

    // send data object back to client
    return res.json(dataObject);
  } catch (err) {
    res.status(500).json({
      message: 'Error fetching swell data',
      error: err,
    });
  }
};

module.exports = getSwellData;
