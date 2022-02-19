import { getTodaysDate } from '../helpers/utils';
import { useFetch } from '../hooks/useFetch';
// Components
import GridItemHeading from './GridItemHeading';
import SwellBody from './SwellBody';
import Loading from './Loading';
import FetchError from './FetchError';
// Styles
import { StyledGridItem } from './styles/Forecast.styled';
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
	const {
		response: swellData,
		loading,
		error,
	} = useFetch(endpoint, {
		headers: {
			Authorization: process.env.REACT_APP_SG_KEY,
		},
	});

	return (
		<StyledGridItem>
			<GridItemHeading icon={swellIcon} title="Swell" />
			{loading && <Loading />}
			{swellData && !loading ? (
				<SwellBody swellData={swellData} />
			) : (
				!loading && <FetchError name="Swell" error={error} />
			)}
		</StyledGridItem>
	);
};

export default Swell;
