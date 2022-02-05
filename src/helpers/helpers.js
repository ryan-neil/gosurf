// get today's date
export const getTodaysDate = () => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  const fullDate = `${year}${month}${day}`;
  // let fullDate = `${year}-${month}-${day}`;

  return fullDate; // -> 20210821
  // return fullDate; // -> 2021-08-21
};

// convert ms time to hours short (6:30 AM): MEDIUM
export const convertUnixTimeMedium = (time) => {
  // let unix_timestamp = time + utcOffset;
  const unix_timestamp = time;
  const date = new Date(unix_timestamp);
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
