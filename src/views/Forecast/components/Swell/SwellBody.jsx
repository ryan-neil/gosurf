// Components
import LineChart from '../Charts/LineChart';
// Helpers
import { avgOfArray } from '../../../../helpers/array.helpers';
import {
	convertRoundNumber,
	convertMetersToFeet,
	convertTimeString,
	convertDegToWindDir,
} from '../../../../helpers/conversions.helpers';
// Styles
import { StyledGridItemBody, StyledSwellTag } from '../../Forecast.styled';
import { Flex, FlexCol } from '../../../../styles/Utils.styled';

const SwellBody = ({ swellData }) => {
	// get primary swell data
	const primSwellHeights = swellData.hours.map((hour) =>
		convertMetersToFeet(hour.swellHeight.noaa)
	);
	const primSwellDirections = swellData.hours.map((hour) =>
		convertRoundNumber(hour.swellDirection.noaa, 0)
	);
	const primSwellPeriods = swellData.hours.map((hour) =>
		convertRoundNumber(hour.swellPeriod.noaa, 0)
	);
	// get average primary swell data
	const avgPrimSwellHeight = convertRoundNumber(avgOfArray(primSwellHeights), 1);
	const avgPrimSwellDirection = convertRoundNumber(
		avgOfArray(primSwellDirections),
		0
	);
	const avgPrimSwellPeriod = convertRoundNumber(avgOfArray(primSwellPeriods), 0);

	// get secondary swell data
	const secSwellHeights = swellData.hours.map((hour) =>
		convertMetersToFeet(hour.secondarySwellHeight.noaa)
	);
	const secSwellDirections = swellData.hours.map((hour) =>
		convertRoundNumber(hour.secondarySwellDirection.noaa, 0)
	);
	const secSwellPeriods = swellData.hours.map((hour) =>
		convertRoundNumber(hour.secondarySwellPeriod.noaa, 0)
	);
	// get average secondary swell data
	const avgSecSwellHeight = convertRoundNumber(avgOfArray(secSwellHeights), 1);
	const avgSecSwellDirection = convertRoundNumber(avgOfArray(secSwellDirections), 0);
	const avgSecSwellPeriod = convertRoundNumber(avgOfArray(secSwellPeriods), 0);

	// get swell times
	const swellTimes = swellData.hours.map(
		// remove last 6 indexes of api time string (remove's: +00:00)
		(hour) => convertTimeString(hour.time.slice(0, 19), { hour: 'numeric' }) // 6 AM
	);

	return (
		<>
			<StyledGridItemBody swell>
				{/* Primary */}
				<Flex gapSm>
					<StyledSwellTag primary />
					<FlexCol>
						<p>Primary swell:</p>
						<p className="primary-data">{avgPrimSwellHeight} ft</p>
						<p>
							'{convertDegToWindDir(avgPrimSwellDirection)}' ({avgPrimSwellDirection}
							º)
						</p>
						<p>Period: {avgPrimSwellPeriod}s</p>
					</FlexCol>
				</Flex>
				{/* Secondary */}
				<Flex gapSm>
					<StyledSwellTag secondary />
					<FlexCol>
						<p>Secondary swell:</p>
						<p className="primary-data">{avgSecSwellHeight} ft</p>
						<p>
							'{convertDegToWindDir(avgSecSwellDirection)}' ({avgSecSwellDirection}º)
						</p>
						<p>Period: {avgSecSwellPeriod}s</p>
					</FlexCol>
				</Flex>
			</StyledGridItemBody>
			<LineChart
				heading="Swell"
				xAxis={swellTimes.slice(5, 21)}
				yAxis={primSwellHeights.slice(5, 21)}
				yAxisSec={secSwellHeights.slice(5, 21)}
			/>
		</>
	);
};

export default SwellBody;
