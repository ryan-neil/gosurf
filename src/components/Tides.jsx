import { useFetch } from '../hooks/useFetch';
import { getTodaysDate, roundNumber } from '../helpers/helpers';
// Components
import Loading from './Loading';
// Styles
import { StyledGridItem } from './styles/Forecast.styled';
import { Flex } from './styles/Utils.styled';
import tidesIcon from '../assets/tides.svg';

const Tides = ({ spot }) => {
	// Resource: https://api.tidesandcurrents.noaa.gov/api/prod/

	// fetch tide data
	const tideEndpoint = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=predictions&station=${
		spot.noaa_station_id
	}&begin_date=${
		getTodaysDate().short
	}&range=24&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=hilo`;
	const { data: tideData, loading } = useFetch(tideEndpoint, {}, [spot.noaa_station_id]);

	// fetch hourly tide data
	const hourlyTideEndpoint = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=predictions&station=${
		spot.noaa_station_id
	}&begin_date=${
		getTodaysDate().short
	}&range=24&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=h`;
	const { data: hourlyTideData } = useFetch(hourlyTideEndpoint, {}, [spot.noaa_station_id]);

	if (tideData && hourlyTideData) {
		// console.log(tideData.predictions);
		// console.log(hourlyTideData.predictions);
	}

	return (
		<>
			{loading && <Loading />}
			{tideData && (
				<StyledGridItem>
					<Flex gapSm>
						<img src={tidesIcon} alt="Tides Icon" />
						<h3>Tides</h3>
					</Flex>
					<div className="grid-item__body">
						{tideData.predictions.map((tide, idx) => (
							<Flex spaceBetween key={idx}>
								{tide.type === 'H' ? <p>High:</p> : <p>Low:</p>}
								<p>{tide.t}</p>
								<p>{roundNumber(tide.v, 2)} ft</p>
							</Flex>
						))}
					</div>
					<div className="grid-item__chart" />
				</StyledGridItem>
			)}
		</>
	);
};

export default Tides;
