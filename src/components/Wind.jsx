import { useFetch } from '../hooks/useFetch';
import { getTodaysDate, roundNumber } from '../helpers/utils';
// Components
import Chart from './Chart';
import Loading from './Loading';
import FetchError from './FetchError';
// Styles
import { StyledGridItem } from './styles/Forecast.styled';
import { Flex } from './styles/Utils.styled';
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
			<Flex gapSm>
				<img src={windIcon} alt="Wind Icon" />
				<h3>Wind</h3>
			</Flex>
			{loading && !error && <Loading />}
			{currWindData && !loading ? (
				<>
					<div className="grid-item__body">
						<p>Current speed:</p>
						<p className="primary-data">{roundNumber(currWindData.data[0].s, 1)} kts</p>
						<p>{`'${currWindData.data[0].dr}' (${roundNumber(currWindData.data[0].d, 1)}°)`}</p>
					</div>
					<Chart />
				</>
			) : (
				!loading && <FetchError name="Wind" error={error} />
			)}
		</StyledGridItem>
	);
};

export default Wind;
