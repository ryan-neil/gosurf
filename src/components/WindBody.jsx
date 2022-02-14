import { roundNumber } from '../helpers/utils';
// Components
import Chart from './Chart';
// Styles
import { StyledGridItemBody } from './styles/Forecast.styled';

const WindBody = ({ currWindData, hourlyWindData }) => {
	// get tides heights
	const getWindHeightsAndTimes = () => {
		let windSpeedsArr = [];
		let windTimesArr = [];

		for (let hour of hourlyWindData.data) {
			const windSpeeds = hour.s;
			const windTimes = hour.t;
			windSpeedsArr.push(roundNumber(windSpeeds, 2));
			windTimesArr.push(windTimes);
		}

		return {
			windSpeedsArr,
			windTimesArr,
		};
	};
	const { windSpeedsArr, windTimesArr } = getWindHeightsAndTimes();

	return (
		<>
			<StyledGridItemBody>
				<p>Current speed:</p>
				<p className="primary-data">{roundNumber(currWindData.data[0].s, 1)} kts</p>
				<p>{`'${currWindData.data[0].dr}' (${roundNumber(currWindData.data[0].d, 1)}°)`}</p>
			</StyledGridItemBody>
			<Chart heading="Wind" xAxis={windTimesArr} yAxis={windSpeedsArr} />
		</>
	);
};

export default WindBody;
