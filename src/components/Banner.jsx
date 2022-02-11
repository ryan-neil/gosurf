import { useFetch } from '../hooks/useFetch';
import { calculateSunTimes } from '../helpers/helpers';
// Components
import Loading from './Loading';
import FetchError from './FetchError';
// Styles
import { StyledBanner } from './styles/Banner.styled';
import { Flex } from './styles/Utils.styled';
import waterIcon from '../assets/water.svg';
import airIcon from '../assets/air.svg';

const Banner = ({ spot }) => {
	// get sunrise and sunset for spot
	const { sunrise, sunset } = calculateSunTimes(spot.lat, spot.lon);

	// fetch air temperature data
	const airTempEndpoint = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=air_temperature&station=${spot.noaa_station_id}&date=latest&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=hilo`;
	let { response: airData, loading, error } = useFetch(airTempEndpoint, {}, [spot.noaa_station_id]);

	// fetch water temperature data
	const waterTempEndpoint = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=water_temperature&station=${spot.noaa_station_id}&date=latest&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=hilo`;
	let { response: waterData } = useFetch(waterTempEndpoint, {}, [spot.noaa_station_id]);

	if (airData && waterData) {
		// console.log(airData);
		// console.log(waterData);
	}

	return (
		<StyledBanner>
			{loading && <Loading />}
			{airData && waterData && !loading ? (
				<>
					<div className="banner-item">
						<h4>Ideal Times to Surf</h4>
						<p>N/A</p>
						<p>N/A</p>
					</div>
					<div className="banner-item">
						<h4>Water Temperature</h4>
						<Flex gapSm>
							<img src={waterIcon} alt="Water Temperature Icon" />
							<p>{`${waterData.data[0].v}°F`}</p>
						</Flex>
					</div>
					<div className="banner-item">
						<h4>Air Temperature</h4>
						<Flex gapSm>
							<img src={airIcon} alt="Air Temperature Icon" />
							<p>{`${airData.data[0].v}°F`}</p>
						</Flex>
					</div>
					<div className="banner-item">
						<h4>Light</h4>
						<Flex spaceBetween gapSm>
							<p>Sunrise</p>
							<p>{sunrise}</p>
						</Flex>
						<Flex spaceBetween gapSm>
							<p>Sunset</p>
							<p>{sunset}</p>
						</Flex>
					</div>
				</>
			) : (
				error && !loading && <FetchError name="Weather" error={error} />
			)}
		</StyledBanner>
	);
};

export default Banner;
