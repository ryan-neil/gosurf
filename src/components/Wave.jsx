import { getTodaysDate } from '../helpers/utils';
import { useFetch } from '../hooks/useFetch';
// Components
import WaveBody from './WaveBody';
import Loading from './Loading';
import FetchError from './FetchError';
// Styles
import { StyledGridItem } from './styles/Forecast.styled';
import { Flex } from './styles/Utils.styled';
import waveIcon from '../assets/wave.svg';

const Wave = ({ spot }) => {
	// Resource: https://daveceddia.com/react-before-render/
	// Resource: https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/

	const { fullDateHyphen } = getTodaysDate();
	const reqParams = ['waveHeight', 'wavePeriod'];
	const endpoint = `https://api.stormglass.io/v2/weather/point?lat=${spot.lat}&lng=${spot.lon}&params=${reqParams}&start=${fullDateHyphen}&end=${fullDateHyphen}T23:00`;
	const { response, loading, error } = useFetch(endpoint, {
		headers: {
			Authorization: process.env.REACT_APP_SG_KEY,
		},
	});

	// waveData = true;
	// loading = true;
	// const minWaveHeight = 2;
	// const maxWaveHeight = 3;

	// 'GridItemHeader' component and 'GridItemBody' component???

	return (
		<StyledGridItem>
			<Flex gapSm>
				<img src={waveIcon} alt="Wave Height Icon" />
				<h3>Wave Height</h3>
			</Flex>
			{loading && <Loading />}
			{response && !loading ? (
				<WaveBody data={response} />
			) : (
				error && !loading && <FetchError name="Wave" error={error} />
			)}
		</StyledGridItem>
	);
};

export default Wave;
