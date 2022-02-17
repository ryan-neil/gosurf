import { useFetch } from '../hooks/useFetch';
import { getTodaysDate } from '../helpers/utils';

// Components
import GridItemHeading from './GridItemHeading';
import TidesBody from './TidesBody';
import Loading from './Loading';
import FetchError from './FetchError';
// Styles
import { StyledGridItem } from './styles/Forecast.styled';
import tidesIcon from '../assets/tides.svg';

const Tides = ({ spot }) => {
	const { fullDate } = getTodaysDate();

	// fetch tide data
	const currTideEndpoint = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=predictions&station=${spot.noaa_station_id}&begin_date=${fullDate}&range=24&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=hilo`;
	const { response: currTideData, loading, error } = useFetch(currTideEndpoint);

	// fetch hourly tide data
	const hourlyTideEndpoint = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=predictions&station=${spot.noaa_station_id}&begin_date=${fullDate}&range=24&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=h`;
	const { response: hourlyTidesData } = useFetch(hourlyTideEndpoint);

	// if (loading) return (<Loading />);
	// if (error) return (<FetchError name="Tide" error={error});

	return (
		<StyledGridItem>
			<GridItemHeading icon={tidesIcon} title="Tides" />
			{loading && <Loading />}
			{currTideData && hourlyTidesData && !loading ? (
				<TidesBody hourlyTidesData={hourlyTidesData} currTideData={currTideData} />
			) : (
				!loading && <FetchError name="Tide" error={error} />
			)}
		</StyledGridItem>
	);
};

export default Tides;
