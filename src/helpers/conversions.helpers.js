import { DateTime } from 'luxon';

// convert time to human
export const convertTimeString = (time, options) => {
  /**
   * need convert date to be compliant with IETF RFC 2822 / ISO8601
   * options type: { hour: 'numeric' } (6 AM)
   * options type: { hour: 'short' } (6:00 AM)
   */

  const date = new Date(time);
  return date.toLocaleString('en-US', options); // 6 AM
};

// convert military time to regular
export const convertMilitaryToReg = (time) => {
  // need to add a short (chart x-axis) function and long (current tides)
  return DateTime.fromFormat(time, 'HH:mm').toFormat('h a');

  // return {
  //   short: DateTime.fromFormat(time, 'HH:mm').toFormat('h a'),
  //   long: DateTime.fromFormat(time, 'HH:mm').toFormat('h:mm a'),
  // };
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

  // Split into the 8 directions
  windDegrees = (windDegrees * 8) / 360;
  // round to nearest integer.
  windDegrees = Math.round(windDegrees, 0);
  // Ensure it's within 0-7
  windDegrees = (windDegrees + 8) % 8;
  return directions[windDegrees];
};
