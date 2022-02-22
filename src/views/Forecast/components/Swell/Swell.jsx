import { calcTodaysDate } from '../../../../helpers/calculations.helpers';
import { useFetch } from '../../../../hooks/useFetch';
// Components
import SwellBody from './SwellBody';
import Loading from '../../../../components/Loading/Loading';
import FetchError from '../../../../components/FetchError/FetchError';
// Styles
import { StyledGridItem } from '../../Forecast.styled';
import { Flex } from '../../../../styles/Utils.styled';
import swellIcon from '../../../../assets/icons/swell.svg';

const Swell = ({ spot }) => {
	const { fullDateHyphen } = calcTodaysDate();
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

	if (!swellData && !loading) {
		<FetchError name="Swell" error={error} />;
		// return null;
	}

	return (
		<StyledGridItem>
			{/* Heading */}
			<Flex gapSm>
				<img src={swellIcon} alt="Swell Icon" />
				<h3>Swell</h3>
			</Flex>
			{/* Body */}
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
