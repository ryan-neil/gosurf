import { roundNumber, convertTimeString } from '../helpers/utils';
// Components
import LineChart from './charts/LineChart';
// Styles
import { Flex } from './styles/Utils.styled';
import { StyledGridItemBody } from './styles/Forecast.styled';

const TidesBody = ({ hourlyTidesData, currTideData }) => {
	// get tides heights
	const tidesHeights = hourlyTidesData.predictions.map((hour) =>
		roundNumber(hour.v, 2)
	);

	// get tides times
	const tidesTimes = hourlyTidesData.predictions.map(
		(hour) => convertTimeString(hour.t, { hour: 'numeric' }) // 6 AM
	);

	return (
		<>
			<StyledGridItemBody tide>
				{currTideData.predictions.map((tide, idx) => (
					<Flex gapMd spaceBetween key={idx}>
						{tide.type === 'H' ? <p>High:</p> : <p>Low:</p>}
						<p>{convertTimeString(tide.t, { timeStyle: 'short' })}</p>
						<p>{roundNumber(tide.v, 2)} ft</p>
					</Flex>
				))}
			</StyledGridItemBody>
			<LineChart
				heading="Tides"
				xAxis={tidesTimes.slice(5, 21)}
				yAxis={tidesHeights.slice(5, 21)}
			/>
		</>
	);
};

export default TidesBody;
