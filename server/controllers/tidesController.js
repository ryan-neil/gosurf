const fetch = require('node-fetch');
const getTodaysDate = require('../helpers/getTodaysDate');

// get tides data from noaa
const getTidesData = async (req, res) => {
  const { stationId } = req.query;
  const { today } = getTodaysDate();
  const options = { method: 'GET' };

  try {
    // fetch helper function
    const fetchText = (url) => fetch(url, options).then((r) => r.json());

    // destructure Promise.all responses
    const [current, hourly] = await Promise.all([
      // current tides endpoint
      fetchText(
        `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=predictions&station=${stationId}&begin_date=${today}&range=24&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=hilo`
      ),
      // hourly tides endpoint
      fetchText(
        `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=predictions&station=${stationId}&begin_date=${today}&range=24&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=h`
      ),
    ]);

    // update current response time key value to be only the military time for frontend to read
    const formatCurrentResponse = current.predictions.map((time) => ({
      ...time,
      t: time.t.slice(11, 18),
    }));

    // update hourly response time key value to be only the military time for frontend to read
    const formatHourlyResponse = hourly.predictions.map((time) => ({
      ...time,
      t: time.t.slice(11, 18),
    }));

    // create our data object
    const dataObject = {
      current: formatCurrentResponse,
      hourly: formatHourlyResponse,
    };

    // send data object back to client
    return res.json(dataObject);
  } catch (err) {
    res.status(500).json({
      message: 'Error fetching tides data',
      error: err,
    });
  }
};

module.exports = getTidesData;
