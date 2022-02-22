// convert time to human
// { hour: 'numeric' } // 6 AM
// { timeStyle: 'short' } // 6:00 AM
export const convertTimeString = (time, options) => {
	const date = new Date(time);
	return date.toLocaleString('en-US', options); // 6 AM
};

// round numbers with a precision point
export const convertRoundNumber = (value, precision) => {
	const multiplier = 10 ** (precision || 0);
	return Math.round(value * multiplier) / multiplier;
};

// convert meters to feet
export const convertMetersToFeet = (meters) => 3.281 * meters;

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
