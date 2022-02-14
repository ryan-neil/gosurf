import { useFetch } from '../hooks/useFetch';
import { getTodaysDate, roundNumber } from '../helpers/utils';
// Components
import Chart from './Chart';
import Loading from './Loading';
import FetchError from './FetchError';
// Styles
import { StyledGridItem } from './styles/Forecast.styled';
import { Flex } from './styles/Utils.styled';
import tidesIcon from '../assets/tides.svg';

const Tides = ({ spot }) => {
	const { fullDate } = getTodaysDate();

	// fetch tide data
	const currTideEndpoint = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=predictions&station=${spot.noaa_station_id}&begin_date=${fullDate}&range=24&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=hilo`;
	const { response: currTideData, loading, error } = useFetch(currTideEndpoint);

	// fetch hourly tide data
	const hourlyTideEndpoint = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=predictions&station=${spot.noaa_station_id}&begin_date=${fullDate}&range=24&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=h`;
	const { response: hourlyTideData } = useFetch(hourlyTideEndpoint);

	return (
		<StyledGridItem>
			<Flex gapSm>
				<img src={tidesIcon} alt="Tides Icon" />
				<h3>Tides</h3>
			</Flex>
			{loading && <Loading />}
			{currTideData && !loading ? (
				<>
					<div className="grid-item__body tide">
						{currTideData.predictions.map((tide, idx) => (
							<Flex gapMd spaceBetween key={idx}>
								{tide.type === 'H' ? <p>High:</p> : <p>Low:</p>}
								<p>{tide.t}</p>
								<p>{roundNumber(tide.v, 2)} ft</p>
							</Flex>
						))}
					</div>
					<Chart />
				</>
			) : (
				!loading && <FetchError name="Tide" error={error} />
			)}
		</StyledGridItem>
	);
};

export default Tides;
