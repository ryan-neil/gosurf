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
		timeZoneName: 'short',
	};

	const sunrise = todaysSunriseTimes.toLocaleString('en-US', dateOptions);
	const sunset = todaysSunsetTimes.toLocaleString('en-US', dateOptions);

	return { sunrise, sunset };
};
