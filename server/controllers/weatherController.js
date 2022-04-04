const fetch = require('node-fetch');

// get weather data from noaa
const getWeatherData = async (req, res) => {
  const { stationId } = req.query;
  const options = { method: 'GET' };

  try {
    // fetch helper function
    const fetchText = (url) => fetch(url, options).then((r) => r.json());

    // destructure Promise.all responses
    const [air, water] = await Promise.all([
      // current air temp endpoint
      fetchText(
        `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=air_temperature&station=${stationId}&date=latest&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=hilo`
      ),
      // current water temp endpoint
      fetchText(
        `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=water_temperature&station=${stationId}&date=latest&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=hilo`
      ),
    ]);

    // create our data object
    const dataObject = {
      airTemp: air.data[0].v,
      waterTemp: water.data[0].v,
    };

    // send data object back to client
    return res.json(dataObject);
  } catch (err) {
    console.error({
      message: 'Error fetching tides data',
      error: err,
    });

    res.json(err.message);
    res.sendStatus(500);
  }
};

module.exports = getWeatherData;
