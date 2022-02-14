import { useFetch } from '../hooks/useFetch';
import {
	getTodaysDate,
	convertMetersToFeet,
	roundNumber,
	remainingRequests,
} from '../helpers/utils';
import { calcBodySize } from '../helpers/calcBodySize';
// Components
import Loading from './Loading';
import FetchError from './FetchError';
// Styles
import { StyledGridItem } from './styles/Forecast.styled';
import { Flex } from './styles/Utils.styled';
import heightIcon from '../assets/height.svg';

const Wave = ({ spot }) => {
	const reqParams = ['waveHeight', 'wavePeriod'];
	const { fullDateHyphen } = getTodaysDate();

	const SG_API_KEY = 'f910740c-fa51-11eb-9f40-0242ac130002-f910747a-fa51-11eb-9f40-0242ac130002';
	const waveEndpoint = `https://api.stormglass.io/v2/weather/point?lat=${spot.lat}&lng=${spot.lon}&params=${reqParams}&start=${fullDateHyphen}&end=${fullDateHyphen}T23:00`;
	const {
		response: waveData,
		loading,
		error,
	} = useFetch(
		waveEndpoint,
		{
			headers: {
				Authorization: SG_API_KEY,
				method: 'GET',
			},
		},
		[]
	);

	if (waveData) {
		console.log(waveData.hours);
		remainingRequests(waveData);
	}

	// get wave heights
	const getWaveHeights = () => {
		const hourlyData = waveData.hours; // data no defined
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
	// const { waveHeightsArr, minWaveHeight, maxWaveHeight } = getWaveHeights();

	// get wave height times
	const getWaveTimes = () => {
		const hourlyData = waveData.hours;
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
	// const { waveTimesArr } = getWaveTimes();

	const waves = true;
	const minWaveHeight = 2;
	const maxWaveHeight = 3;

	return (
		<StyledGridItem>
			<Flex gapSm>
				<img src={heightIcon} alt="Wave Height Icon" />
				<h3>Wave Height</h3>
			</Flex>
			{loading && <Loading />}
			{waves && !loading ? (
				<>
					<div className="grid-item__body">
						<p>Todays range:</p>
						<p className="primary-data">
							{minWaveHeight}-{maxWaveHeight} ft
						</p>
						<p>{calcBodySize(minWaveHeight, maxWaveHeight)}</p>
					</div>
					<div className="grid-item__chart" />
				</>
			) : (
				error && !loading && <FetchError name="Wave" error={error} />
			)}
		</StyledGridItem>
	);
};

export default Wave;
