import { useFetch } from '../hooks/useFetch';
import { getTodaysDate, remainingRequests } from '../helpers/helpers';
// Components
import Loading from './Loading';
// Styles
import { StyledGridItem } from './styles/Forecast.styled';
import { Flex } from './styles/Utils.styled';
import heightIcon from '../assets/height.svg';

const WaveHeight = ({ spot }) => {
	const today = '2022-02-05';
	const buoyId = 51206;
	// ndbc endpoint:`https://www.ndbc.noaa.gov/data/realtime2/${buoyId}.txt`;

	// https://create-react-app.dev/docs/adding-custom-environment-variables/
	// process.env.REACT_APP_SG_KEY

	const SG_API_KEY = 'f910740c-fa51-11eb-9f40-0242ac130002-f910747a-fa51-11eb-9f40-0242ac130002';
	const reqParams = ['waveHeight', 'wavePeriod'];
	const waveEndpoint = `https://api.stormglass.io/v2/weather/point?lat=${spot.lat}&lng=${
		spot.lon
	}&params=${reqParams}&start=${getTodaysDate().long}&end=${getTodaysDate().long}T23:00`;
	const { data: waveData, loading } = useFetch(
		waveEndpoint,
		{
			headers: {
				// Authorization: process.env.REACT_APP_SG_KEY,
				method: 'GET'
			}
		},
		[]
	);

	if (waveData) {
		console.log(waveData.hours);
		remainingRequests(waveData);
	}

	return (
		<>
			{loading && <Loading />}
			<StyledGridItem>
				<Flex gapSm>
					<img src={heightIcon} alt="Wave Height Icon" />
					<h3>Wave Height</h3>
				</Flex>
				<div className="grid-item__body">
					<p>N/A</p>
				</div>
				<div className="grid-item__chart" />
			</StyledGridItem>
		</>
	);
};

export default WaveHeight;
