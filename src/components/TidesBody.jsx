import { roundNumber } from '../helpers/utils';
// Components
import Chart from './Chart';
// Styles
import { Flex } from './styles/Utils.styled';
import { StyledGridItemBody } from './styles/Forecast.styled';

const TidesBody = ({ hourlyTidesData, currTideData }) => {
	// get tides heights
	const getTidesHeightsAndTimes = () => {
		let tidesHeightsArr = [];
		let tidesTimesArr = [];

		for (let hour of hourlyTidesData.predictions) {
			const tidesHeights = hour.v;
			const tidesTimes = hour.t;
			tidesHeightsArr.push(roundNumber(tidesHeights, 2));
			tidesTimesArr.push(tidesTimes);
		}

		return {
			tidesHeightsArr,
			tidesTimesArr,
		};
	};
	const { tidesHeightsArr, tidesTimesArr } = getTidesHeightsAndTimes();

	return (
		<>
			<StyledGridItemBody tide>
				{currTideData.predictions.map((tide, idx) => (
					<Flex gapMd spaceBetween key={idx}>
						{tide.type === 'H' ? <p>High:</p> : <p>Low:</p>}
						<p>{tide.t}</p>
						<p>{roundNumber(tide.v, 2)} ft</p>
					</Flex>
				))}
			</StyledGridItemBody>
			<Chart heading="Tides" xAxis={tidesTimesArr} yAxis={tidesHeightsArr} />
		</>
	);
};

export default TidesBody;
