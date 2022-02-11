import { useFetch } from '../hooks/useFetch';
import { getTodaysDate, roundNumber } from '../helpers/helpers';
// Components
import Loading from './Loading';
import FetchError from './FetchError';
// Styles
import { StyledGridItem } from './styles/Forecast.styled';
import { Flex } from './styles/Utils.styled';
import windIcon from '../assets/wind.svg';

const Wind = ({ spot }) => {
	const { fullDate } = getTodaysDate();

	// fetch wind data
	const windEndpoint = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=wind&station=${spot.noaa_station_id}&date=latest&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=hilo`;
	const { response: windData, loading, error } = useFetch(windEndpoint, {}, [spot.noaa_station_id]);

	// fetch hourly wind data
	const hourlyWindEndpoint = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=wind&station=${spot.noaa_station_id}&begin_date=${fullDate}&range=24&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=h`;
	const { data: hourlyWindData } = useFetch(hourlyWindEndpoint, {}, [spot.noaa_station_id]);

	if (windData && hourlyWindData) {
		// console.log(windData.data);
		// console.log(hourlyWindData.predictions);
	}

	return (
		<StyledGridItem>
			<Flex gapSm>
				<img src={windIcon} alt="Wind Icon" />
				<h3>Wind</h3>
			</Flex>
			{loading && !error && <Loading />}
			{windData && !loading ? (
				<>
					<div className="grid-item__body">
						<p>Current speed:</p>
						<p className="primary-data">{roundNumber(windData.data[0].s, 1)} kts</p>
						<p>{`'${windData.data[0].dr}' (${roundNumber(windData.data[0].d, 1)}°)`}</p>
					</div>
					<div className="grid-item__chart" />
				</>
			) : (
				!loading && <FetchError name="Wind" error={error} />
			)}
		</StyledGridItem>
	);
};

export default Wind;
