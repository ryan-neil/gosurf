// Components
import BarChart from '../../../../components/Charts/BarChart';
// Helpers
import {
	convertRoundNumber,
	convertMetersToFeet,
	convertTimeString,
} from '../../../../helpers/conversions.helpers';
import { calcBodySize } from '../../../../helpers/calculations.helpers';
// Styles
import { StyledGridItemBody } from '../../Forecast.styled';

const WaveBody = ({ waveData }) => {
	// get wave heights
	const waveHeights = waveData.hours.map((wave) =>
		convertRoundNumber(convertMetersToFeet(wave.waveHeight.noaa))
	);
	// get minimum wave height
	const minWaveHeight = convertRoundNumber(Math.min(...waveHeights));
	// get maximum wave height
	const maxWaveHeight = convertRoundNumber(Math.max(...waveHeights));

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
