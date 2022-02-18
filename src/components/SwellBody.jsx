import {
	convertMetersToFeet,
	roundNumber,
	avgOfArray,
	convertDegToWindDir,
	remainingRequests,
	convertTimeString,
} from '../helpers/utils';
// Components
import Chart from './Chart';
// Styles
import { StyledGridItemBody, StyledSwellTag } from './styles/Forecast.styled';
import { Flex, FlexCol } from './styles/Utils.styled';

const SwellBody = ({ data }) => {
	// get primary swell data
	const primSwellHeights = data.hours.map((hour) =>
		convertMetersToFeet(hour.swellHeight.noaa)
	);
	const primSwellDirections = data.hours.map((hour) =>
		roundNumber(hour.swellDirection.noaa, 0)
	);
	const primSwellPeriods = data.hours.map((hour) =>
		roundNumber(hour.swellPeriod.noaa, 0)
	);
	// get average primary swell data
	const avgPrimSwellHeight = roundNumber(avgOfArray(primSwellHeights), 1);
	const avgPrimSwellDirection = roundNumber(avgOfArray(primSwellDirections), 0);
	const avgPrimSwellPeriod = roundNumber(avgOfArray(primSwellPeriods), 0);

	// get secondary swell data
	const secSwellHeights = data.hours.map((hour) =>
		convertMetersToFeet(hour.secondarySwellHeight.noaa)
	);
	const secSwellDirections = data.hours.map((hour) =>
		roundNumber(hour.secondarySwellDirection.noaa, 0)
	);
	const secSwellPeriods = data.hours.map((hour) =>
		roundNumber(hour.secondarySwellPeriod.noaa, 0)
	);
	// get average secondary swell data
	const avgSecSwellHeight = roundNumber(avgOfArray(secSwellHeights), 1);
	const avgSecSwellDirection = roundNumber(avgOfArray(secSwellDirections), 0);
	const avgSecSwellPeriod = roundNumber(avgOfArray(secSwellPeriods), 0);

	// get swell times
	const swellTimes = data.hours.map(
		(hour) => convertTimeString(hour.time.slice(0, 19)) // remove last 6 indexes of api time string (remove's: +00:00)
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
			<Chart heading="Swell" />
		</>
	);
};

export default SwellBody;
