import { useFetch } from '../hooks/useFetch';
// import { getTodaysDate } from '../helpers/helpers';
// Styles
import { StyledGridItem } from './styles/Forecast.styled';
import { Flex } from './styles/Utils.styled';
import heightIcon from '../assets/height.svg';

const WaveHeight = ({ spot }) => {
	// web service: https://www.ncdc.noaa.gov/cdo-web/webservices/v2
	// noaa token: URsWQYxfQLMcEfTEtwvWTHlYlMYQUwTx
	// headers: 'URsWQYxfQLMcEfTEtwvWTHlYlMYQUwTx'

	// fetch height data
	// const heightEndpoint = `https://api.weather.gov/points/${spot.lat},${spot.lon}`;
	// const { data: heightData } = useFetch(heightEndpoint, {}, [
	// 	spot.noaa_station_id
	// ]);

	// if (heightData) {
	// 	console.log(heightData);
	// }

	return (
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
	);
};

export default WaveHeight;
