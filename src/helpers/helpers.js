import SunCalc from 'suncalc';

// get today's date
export const getTodaysDate = () => {
	const date = new Date();
	const day = String(date.getDate()).padStart(2, '0');
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const year = date.getFullYear();

	const fullDate = `${year}${month}${day}`; // -> 20210821
	const fullDateHyphen = `${year}-${month}-${day}`; // -> 2021-08-21

	return { fullDate, fullDateHyphen };
};

// get sunrise and sunset calculations
export const calculateSunTimes = (lat, lon) => {
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0, 0, 0);
	// const tomorrow = new Date(today.getTime() + 86400000); // (24 * 60 * 60 * 1000));

	const todaysSunriseTimes = SunCalc.getTimes(today, lat, lon).sunrise;
	const todaysSunsetTimes = SunCalc.getTimes(today, lat, lon).sunset;

	const dateOptions = {
		hour: 'numeric',
		minute: '2-digit',
		hour12: true,
		timeZoneName: 'short',
	};

	const sunrise = todaysSunriseTimes.toLocaleString('en-US', dateOptions);
	const sunset = todaysSunsetTimes.toLocaleString('en-US', dateOptions);

	return { sunrise, sunset };
};

// convert ms time to hours short (6:30 AM): MEDIUM
export const convertUnixTimeMedium = (time) => {
	// let unix_timestamp = time + utcOffset;
	const unixTimestamp = time;
	const date = new Date(unixTimestamp);
	const dateOptions = {
		hour: 'numeric',
		minute: '2-digit',
		hour12: true,
	};

	const timeString = date.toLocaleString('en-US', dateOptions);

	return timeString;
};

// round numbers with a precision point
export const roundNumber = (value, precision) => {
	const multiplier = 10 ** (precision || 0);
	return Math.round(value * multiplier) / multiplier;
};

export const convertMetersToFeet = (meters) => 3.281 * meters;

// get average of an array
export const avgOfArray = (arr) => {
	const sum = arr.reduce((acc, cur) => acc + cur);
	return sum / arr.length;
};

// calculate meters to feet
export const calcMetersToFeet = (num) => num * 3.2808;

// calculate meters to feet
export const calcMetersPerSecToKnots = (num) => num * 1.94;

// convert celsius to fahrenheit
export const convertCelsiusToFahrenheit = (degrees) => (degrees * 9) / 5 + 32;

// convert wind direction from degrees to text
export const convertDegToWindDir = (degrees) => {
	// Insert the amount of degrees here
	let windDegrees = degrees;

	// Define array of directions
	const directions = [
		'North',
		'Northeast',
		'East',
		'Southeast',
		'South',
		'Southwest',
		'West',
		'Northwest',
	];

	// Points on a compass mapped to their degrees.
	const compassPoints = [
		{ N: '0' },
		{ NNE: '23' },
		{ NE: '45' },
		{ ENE: '68' },
		{ E: '90' },
		{ ESE: '113' },
		{ SE: '135' },
		{ SSE: '158' },
		{ S: '180' },
		{ SSW: '203' },
		{ SW: '225' },
		{ WSW: '248' },
		{ W: '270' },
		{ WNW: '292' },
		{ NW: '315' },
		{ NNW: '326' },
	];

	// Split into the 8 directions
	windDegrees = (windDegrees * 8) / 360;
	// round to nearest integer.
	windDegrees = Math.round(windDegrees, 0);
	// Ensure it's within 0-7
	windDegrees = (windDegrees + 8) % 8;
	return directions[windDegrees];
};

// set wave height body height text
export const setBodySize = (minHeight, maxHeight) => {
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

// remaining stormglass api requests
export const remainingRequests = (data) => {
	const dailyRequests = data.meta.dailyQuota;
	const usedRequests = data.meta.requestCount;
	console.log(`Remaining Storm Glass API requests today: ${dailyRequests - usedRequests}`);
};
