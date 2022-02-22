import { calcTodaysDate } from '../../../../helpers/calculations.helpers';
import { useFetch } from '../../../../hooks/useFetch';
// Components
import WaveBody from './WaveBody';
import Loading from '../../../../components/Loading/Loading';
import FetchError from '../../../../components/FetchError/FetchError';
// Styles
import { StyledGridItem } from '../../Forecast.styled';
import { Flex } from '../../../../styles/Utils.styled';
import waveIcon from '../../../../assets/wave.svg';

const Wave = ({ spot }) => {
	// Resource: https://daveceddia.com/react-before-render/
	// Resource: https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/

	const { fullDateHyphen } = calcTodaysDate();
	const reqParams = ['waveHeight', 'wavePeriod'];
	const endpoint = `https://api.stormglass.io/v2/weather/point?lat=${spot.lat}&lng=${spot.lon}&params=${reqParams}&start=${fullDateHyphen}&end=${fullDateHyphen}T23:00`;
	const {
		response: waveData,
		loading,
		error,
	} = useFetch(endpoint, {
		headers: {
			Authorization: process.env.REACT_APP_SG_KEY,
		},
	});

	if (!waveData && !loading) {
		<FetchError name="Wave" error={error} />;
		// return null;
	}

	/**
	 * BUG: Not Working...
	 */

	// const waveHeights = response.hours.map((wave) =>
	// 	roundNumber(convertMetersToFeet(wave.waveHeight.noaa))
	// );
	// console.log(waveHeights);

	return (
		<StyledGridItem>
			{/* Heading */}
			<Flex gapSm>
				<img src={waveIcon} alt="Wave Height Icon" />
				<h3>Wave Height</h3>
			</Flex>
			{/* Body */}
			{loading && <Loading />}
			{waveData && !loading ? (
				<WaveBody waveData={waveData} />
			) : (
				!loading && <FetchError name="Wave" error={error} />
			)}
		</StyledGridItem>
	);
};

export default Wave;
