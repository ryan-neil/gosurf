import { useFetch } from '../hooks/useFetch';
import { getTodaysDate } from '../helpers/utils';

// Components
import GridItemHeading from './GridItemHeading';
import WindBody from './WindBody';
import Loading from './Loading';
import FetchError from './FetchError';
// Styles
import { StyledGridItem } from './styles/Forecast.styled';
import windIcon from '../assets/wind.svg';

const Wind = ({ spot }) => {
	// get api endpoint date
	const { fullDate } = getTodaysDate();

	// fetch current wind data
	const currWindEndpoint = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=wind&station=${spot.noaa_station_id}&date=latest&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=hilo`;
	const { response: currWindData, loading, error } = useFetch(currWindEndpoint);

	// fetch hourly wind data
	const hourlyWindEndpoint = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=wind&station=${spot.noaa_station_id}&begin_date=${fullDate}&range=24&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=h`;
	const { response: hourlyWindData } = useFetch(hourlyWindEndpoint);

	return (
		<StyledGridItem>
			<GridItemHeading icon={windIcon} title="Wind" />
			{loading && !error && <Loading />}
			{currWindData && hourlyWindData && !loading ? (
				<WindBody currWindData={currWindData} hourlyWindData={hourlyWindData} />
			) : (
				!loading && <FetchError name="Wind" error={error} />
			)}
		</StyledGridItem>
	);
};

export default Wind;
