import { useFetch } from '../hooks/useFetch';
import {
	getTodaysDate,
	convertMetersToFeet,
	roundNumber,
	setBodySize,
	remainingRequests,
} from '../helpers/helpers';
// Components
import Loading from './Loading';
import FetchError from './FetchError';
// Styles
import { StyledGridItem } from './styles/Forecast.styled';
import { Flex } from './styles/Utils.styled';
import heightIcon from '../assets/height.svg';

const WaveHeight = ({ spot }) => {
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
				// Authorization: SG_API_KEY,
				method: 'GET',
			},
		},
		[]
	);

	if (waveData) {
		console.log(waveData.hours);
		remainingRequests(waveData);
	}

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
						<p>{setBodySize(minWaveHeight, maxWaveHeight)}</p>
					</div>
					<div className="grid-item__chart" />
				</>
			) : (
				error && !loading && <FetchError name="Wave" error={error} />
			)}
		</StyledGridItem>
	);
};

export default WaveHeight;
