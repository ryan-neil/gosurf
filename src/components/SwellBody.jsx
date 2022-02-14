import {
	convertMetersToFeet,
	roundNumber,
	avgOfArray,
	convertDegToWindDir,
	remainingRequests,
} from '../helpers/utils';
// Components
import Chart from './Chart';
// Styles
import { StyledGridItemBody, StyledSwellTag } from './styles/Forecast.styled';
import { Flex, FlexCol } from './styles/Utils.styled';

const SwellBody = ({ data }) => {
	const hourlySwellData = data.hours;
	// console.log(hourlySwellData);

	remainingRequests(data);

	// get primary swell data
	const getPrimarySwellData = () => {
		let swellHeightsArr = [];
		let swellDirectionsArr = [];
		let swellPeriodsArr = [];

		for (let hour of hourlySwellData) {
			// primary swell heights
			const swellHeights = hour.swellHeight.noaa;
			const swellHeightsToFeet = convertMetersToFeet(swellHeights);
			const swellHeightsRounded = roundNumber(swellHeightsToFeet, 1);
			swellHeightsArr.push(swellHeightsRounded);
			// primary swell directions
			const swellDirections = hour.swellDirection.noaa;
			swellDirectionsArr.push(swellDirections);
			// primary swell periods
			const swellPeriods = hour.swellPeriod.noaa;
			swellPeriodsArr.push(swellPeriods);
		}

		const avgSwellHeight = avgOfArray(swellHeightsArr);
		const avgSwellDirection = avgOfArray(swellDirectionsArr);
		const avgSwellPeriod = avgOfArray(swellPeriodsArr);

		const swellHeight = roundNumber(avgSwellHeight, 1);
		const swellDirection = roundNumber(avgSwellDirection, 0);
		const swellPeriod = roundNumber(avgSwellPeriod, 0);

		return {
			swellHeightsArr,
			swellHeight,
			swellDirection,
			swellPeriod,
		};
	};
	const { swellHeightsArr, swellHeight, swellDirection, swellPeriod } = getPrimarySwellData();

	// get secondary swell data
	const getSecondarySwellData = () => {
		let secSwellHeightsArr = [];
		let secSwellDirectionsArr = [];
		let secSwellPeriodsArr = [];

		for (let hour of hourlySwellData) {
			// secondary swell heights
			const swellHeights = hour.secondarySwellHeight.noaa;
			const swellHeightsToFeet = convertMetersToFeet(swellHeights);
			const swellHeightsRounded = roundNumber(swellHeightsToFeet, 1);
			secSwellHeightsArr.push(swellHeightsRounded);
			// secondary swell directions
			const swellDirections = hour.secondarySwellDirection.noaa;
			secSwellDirectionsArr.push(swellDirections);
			// secondary swell periods
			const swellPeriods = hour.secondarySwellPeriod.noaa;
			secSwellPeriodsArr.push(swellPeriods);
		}

		const avgSecSwellHeight = avgOfArray(secSwellHeightsArr);
		const avgSecSwellDirection = avgOfArray(secSwellDirectionsArr);
		const avgSecSwellPeriod = avgOfArray(secSwellPeriodsArr);

		const secSwellHeight = roundNumber(avgSecSwellHeight, 1);
		const secSwellDirection = roundNumber(avgSecSwellDirection, 0);
		const secSwellPeriod = roundNumber(avgSecSwellPeriod, 0);

		return {
			secSwellHeightsArr,
			secSwellHeight,
			secSwellDirection,
			secSwellPeriod,
		};
	};
	const { secSwellHeightsArr, secSwellHeight, secSwellDirection, secSwellPeriod } =
		getSecondarySwellData();

	// get swell times data
	const getSwellTimes = () => {
		let swellTimesArr = [];

		for (let hour of hourlySwellData) {
			const swellHeightTimes = hour.time;

			const dateOptions = {
				hour: 'numeric',
				minute: '2-digit',
				hour12: true,
			};

			const times = new Date(swellHeightTimes).toLocaleString('en-US', dateOptions);
			swellTimesArr.push(times);
		}

		return { swellTimesArr };
	};
	const { swellTimesArr } = getSwellTimes();

	return (
		<>
			<StyledGridItemBody swell>
				<Flex gapSm>
					<StyledSwellTag primary />
					<FlexCol>
						<p>Primary swell:</p>
						<p className="primary-data">{swellHeight} ft</p>
						<p>
							'{convertDegToWindDir(swellDirection)}' ({swellDirection}º)
						</p>
						<p>Period: {swellPeriod}s</p>
					</FlexCol>
				</Flex>
				{}
				<Flex gapSm>
					<StyledSwellTag secondary />
					<FlexCol>
						<p>Secondary swell:</p>
						<p className="primary-data">{secSwellHeight} ft</p>
						<p>
							'{convertDegToWindDir(secSwellDirection)}' ({secSwellDirection}º)
						</p>
						<p>Period: {secSwellPeriod}s</p>
					</FlexCol>
				</Flex>
			</StyledGridItemBody>
			<Chart
				heading="Swell"
				xAxis={swellTimesArr}
				yAxis={swellHeightsArr}
				yAxisSecondary={secSwellHeightsArr}
			/>
		</>
	);
};

export default SwellBody;
