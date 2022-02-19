import {
	convertMetersToFeet,
	roundNumber,
	convertTimeString,
} from '../helpers/utils';
import { calcBodySize } from '../helpers/calcBodySize';
// Components
import BarChart from './charts/BarChart';
// Styles
import { StyledGridItemBody } from './styles/Forecast.styled';

const WaveBody = ({ waveData }) => {
	// get wave heights
	const waveHeights = waveData.hours.map((wave) =>
		roundNumber(convertMetersToFeet(wave.waveHeight.noaa))
	);
	// get minimum wave height
	const minWaveHeight = roundNumber(Math.min(...waveHeights));
	// get maximum wave height
	const maxWaveHeight = roundNumber(Math.max(...waveHeights));

	// get wave times
	const waveTimes = waveData.hours.map(
		// remove last 6 indexes of api time string (remove's: +00:00)
		(wave) => convertTimeString(wave.time.slice(0, 19), { hour: 'numeric' }) // 6 AM
	);

	return (
		<>
			<StyledGridItemBody>
				<p>Todays range:</p>
				<p className="primary-data">
					{minWaveHeight === maxWaveHeight
						? `${maxWaveHeight} ft`
						: `${minWaveHeight}-${maxWaveHeight} ft`}
				</p>
				{calcBodySize(minWaveHeight, maxWaveHeight)}
			</StyledGridItemBody>
			<BarChart
				heading="Wave Height"
				xAxis={waveTimes.slice(5, 21)}
				yAxis={waveHeights.slice(5, 21)}
			/>
		</>
	);
};

export default WaveBody;
