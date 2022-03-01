import SunCalc from 'suncalc';

// get sunrise and sunset calculations
export const calcSunTimes = (lat, lon) => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0, 0, 0);
  // const tomorrow = new Date(today.getTime() + 86400000); // (24 * 60 * 60 * 1000));

  const todaysSunriseTimes = SunCalc.getTimes(today, lat, lon).sunrise;
  const todaysSunsetTimes = SunCalc.getTimes(today, lat, lon).sunset;

  const dateOptions = {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZoneName: 'short'
  };

  const sunrise = todaysSunriseTimes.toLocaleString('en-US', dateOptions);
  const sunset = todaysSunsetTimes.toLocaleString('en-US', dateOptions);

  return { sunrise, sunset };
};

// get today's date
export const calcTodaysDate = () => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  const fullDate = `${year}${month}${day}`; // -> 20210821
  const fullDateHyphen = `${year}-${month}-${day}`; // -> 2021-08-21

  return { fullDate, fullDateHyphen };
};

// calculate body height text based on minimum and maximum wave heights
export const calcBodySize = (minHeight, maxHeight) => {
  switch (true) {
    case minHeight === 0:
      return <p>Skate day...</p>;
    case minHeight === 1:
      return <p>Ankle slappers</p>;
    case minHeight === 2 && maxHeight === 3:
      return <p>Shin to thigh high</p>;
    case minHeight === 2:
      return <p>Shin ticklers</p>;
    case minHeight === 3 && maxHeight === 4:
      return <p>Thigh to chest high</p>;
    case minHeight === 3:
      return <p>Thigh high</p>;
    case minHeight === 4 && maxHeight === 5:
      return <p>Stomach to shoulder high</p>;
    case minHeight === 4:
      return <p>Stomach high</p>;
    case minHeight === 5 && maxHeight === 6:
      return <p>Shoulder to head high</p>;
    case minHeight === 5:
      return <p>Shoulder high</p>;
    case minHeight === 6 && maxHeight === 7:
      return <p>Head high to overhead</p>;
    case minHeight === 6:
      return <p>Head high</p>;
    case minHeight === 7 && maxHeight === 8:
      return <p>Overhead to double overhead</p>;
    case minHeight === 7:
      return <p>Overhead</p>;
    case minHeight === 8 && maxHeight === 9:
      return <p>Double overhead to triple overhead</p>;
    case minHeight === 8:
      return <p>Double overhead</p>;
    case minHeight === 9 && maxHeight === 10:
      return <p>Triple overhead to too big</p>;
    case minHeight === 9:
      return <p>Triple overhead</p>;
    case minHeight === 10:
    case minHeight === 11:
    case minHeight === 12:
      return <p>Pumping!</p>;
    case minHeight === 13:
    case minHeight === 14:
    case minHeight === 15:
    case minHeight === 16:
    case minHeight === 17:
    case minHeight === 18:
    case minHeight === 19:
    case minHeight === 20:
    case minHeight === 21:
    case minHeight === 22:
    case minHeight === 23:
    case minHeight === 24:
    case minHeight === 25:
      return <p>Grab your Airlift vest</p>;
    default:
      <p>Maybe sit this one out</p>;
  }
};

// calculate meters to feet
export const calcMetersToFeet = (num) => num * 3.2808;

// calculate meters to feet
export const calcMetersPerSecToKnots = (num) => num * 1.94;

// calculate ideal spot conditions
export const calcIdealConditions = (spot) => {
  // const idealWaveHeight = spot.ideal_conditions.surf_height;
  // const idealTide = spot.ideal_conditions.tide;
  // const idealWindDirection = spot.ideal_conditions.wind;
  // const idealSwellDirection = spot.ideal_conditions.swell_direction;

  return {
    // wave,
    // tides,
    // wind,
    // swell,
  };
};
