// get todays date to pass to API endpoints...
const getTodaysDate = () => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  const today = `${year}${month}${day}`; // -> 20210821
  const todayHyphen = `${year}-${month}-${day}`; // -> 2021-08-21

  return { today, todayHyphen };
};

module.exports = getTodaysDate;
