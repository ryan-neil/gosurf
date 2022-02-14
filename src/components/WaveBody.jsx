import { convertMetersToFeet, roundNumber } from '../helpers/utils';
import { calcBodySize } from '../helpers/calcBodySize';
// Components
import Chart from './Chart';
// Styles
import { StyledGridItemBody } from './styles/Forecast.styled';

const WaveBody = ({ data }) => {
	// get wave heights
	const getWaveHeights = () => {
		const hourlyData = data.hours; // data no defined
		let waveHeightsArr = [];

		for (let hour of hourlyData) {
			const waveHeights = hour.waveHeight.noaa;
			const waveHeightsToFeet = convertMetersToFeet(waveHeights);
			const waveHeightsRounded = roundNumber(waveHeightsToFeet, 0);
			waveHeightsArr.push(waveHeightsRounded);
		}

		const minWaveHeight = Math.min(...waveHeightsArr);
		const maxWaveHeight = Math.max(...waveHeightsArr);

		return {
			waveHeightsArr,
			minWaveHeight,
			maxWaveHeight,
		};
	};
	const { waveHeightsArr, minWaveHeight, maxWaveHeight } = getWaveHeights();

	// get wave height times
	const getWaveTimes = () => {
		const hourlyData = data.hours;
		let waveTimesArr = [];

		for (let hour of hourlyData) {
			const waveHeightTimes = hour.time;

			const dateOptions = {
				hour: 'numeric',
				minute: '2-digit',
				hour12: true,
			};

			const times = new Date(waveHeightTimes).toLocaleString('en-US', dateOptions);
			waveTimesArr.push(times);
		}

		return { waveTimesArr };
	};
	const { waveTimesArr } = getWaveTimes();

	return (
		<>
			<StyledGridItemBody>
				<p>Todays range:</p>
				<p className="primary-data">
					{minWaveHeight}-{maxWaveHeight} ft
				</p>
				{calcBodySize(minWaveHeight, maxWaveHeight)}
			</StyledGridItemBody>
			<Chart heading="Wave Height" xAxis={waveTimesArr} yAxis={waveHeightsArr} />
		</>
	);
};

export default WaveBody;
