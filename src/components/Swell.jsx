import { getTodaysDate } from '../helpers/utils';
import { useFetch } from '../hooks/useFetch';
// Components
import SwellBody from './SwellBody';
import Loading from './Loading';
import FetchError from './FetchError';
// Styles
import { StyledGridItem } from './styles/Forecast.styled';
import { Flex } from './styles/Utils.styled';
import swellIcon from '../assets/swell.svg';

const Swell = ({ spot }) => {
	const { fullDateHyphen } = getTodaysDate();
	const reqParams = [
		'swellHeight',
		'swellDirection',
		'swellPeriod',
		'secondarySwellHeight',
		'secondarySwellDirection',
		'secondarySwellPeriod',
	];
	const endpoint = `https://api.stormglass.io/v2/weather/point?lat=${spot.lat}&lng=${spot.lon}&params=${reqParams}&start=${fullDateHyphen}&end=${fullDateHyphen}T23:00`;
	const { response, loading, error } = useFetch(endpoint, {
		headers: {
			// Authorization: process.env.REACT_APP_SG_KEY,
		},
	});

	return (
		<StyledGridItem>
			<Flex gapSm>
				<img src={swellIcon} alt="Swell Icon" />
				<h3>Swell</h3>
			</Flex>
			{loading && <Loading />}
			{response && !loading ? (
				<SwellBody data={response} />
			) : (
				error && !loading && <FetchError name="Swell" error={error} />
			)}
		</StyledGridItem>
	);
};

export default Swell;
