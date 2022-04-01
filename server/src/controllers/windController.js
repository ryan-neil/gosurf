const fetch = require('node-fetch');
const getTodaysDate = require('../helpers/getTodaysDate');

// get wind data from noaa
const getWindData = async (req, res) => {
  const { stationId } = req.query;
  const { today } = getTodaysDate();
  const options = { methof: 'GET' };

  try {
    // fetch helper function
    const fetchText = (url) => fetch(url, options).then((r) => r.json());

    // destructure Promise.all responses
    const [current, hourly] = await Promise.all([
      // current tides endpoint
      fetchText(
        `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=wind&station=${stationId}&date=latest&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=hilo`
      ),
      // hourly tides endpoint
      fetchText(
        `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=wind&station=${stationId}&begin_date=${today}&range=24&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=h`
      ),
    ]);

    // create our data object
    const dataObject = {
      current: current.data[0],
      hourly: hourly.data,
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

module.exports = getWindData;
