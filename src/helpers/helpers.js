// get today's date
export const getTodaysDate = () => {
	const date = new Date();
	const day = String(date.getDate()).padStart(2, '0');
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const year = date.getFullYear();

	const fullDate = `${year}${month}${day}`; // -> 20210821
	const fullDateHyphen = `${year}-${month}-${day}`; // -> 2021-08-21

	return { short: fullDate, long: fullDateHyphen };
};

// convert ms time to hours short (6:30 AM): MEDIUM
export const convertUnixTimeMedium = (time) => {
	// let unix_timestamp = time + utcOffset;
	const unixTimestamp = time;
	const date = new Date(unixTimestamp);
	const dateOptions = {
		hour: 'numeric',
		minute: '2-digit',
		hour12: true
	};

	const timeString = date.toLocaleString('en-US', dateOptions);

	return timeString;
};

// round numbers with a precision point
export const roundNumber = (value, precision) => {
	const multiplier = 10 ** (precision || 0);
	return Math.round(value * multiplier) / multiplier;
};

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
		'Northwest'
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
		{ NNW: '326' }
	];

	// Split into the 8 directions
	windDegrees = (windDegrees * 8) / 360;
	// round to nearest integer.
	windDegrees = Math.round(windDegrees, 0);
	// Ensure it's within 0-7
	windDegrees = (windDegrees + 8) % 8;
	return directions[windDegrees];
};

// remaining stormglass api requests
export const remainingRequests = (data) => {
	const dailyRequests = data.meta.dailyQuota;
	const usedRequests = data.meta.requestCount;
	console.log(`Remaining Storm Glass API requests today: ${dailyRequests - usedRequests}`);
};
