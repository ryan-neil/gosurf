import { roundNumber, convertTimeString } from '../helpers/utils';
// Components
import Chart from './Chart';
// Styles
import { StyledGridItemBody } from './styles/Forecast.styled';

const WindBody = ({ currWindData, hourlyWindData }) => {
	// get wind speeds
	const windSpeeds = hourlyWindData.data.map((hour) => roundNumber(hour.s));

	// get wind times
	const windTimes = hourlyWindData.data.map((hour) => convertTimeString(hour.t));

	return (
		<>
			<StyledGridItemBody>
				<p>Current speed:</p>
				<p className="primary-data">{roundNumber(currWindData.data[0].s, 1)} kts</p>
				<p>{`'${currWindData.data[0].dr}' (${roundNumber(
					currWindData.data[0].d,
					1
				)}°)`}</p>
			</StyledGridItemBody>
			<Chart heading="Wind" />
		</>
	);
};

export default WindBody;
