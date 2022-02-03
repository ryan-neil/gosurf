import { useFetch } from '../hooks/useFetch';
import { getTodaysDate, roundNumber } from '../helpers/helpers';
// styles
import tidesIcon from '../assets/tides.svg';
import { Flex } from './styles/Utils.styled';

const Tides = ({ spot }) => {
	// Resource: https://api.tidesandcurrents.noaa.gov/api/prod/

	// fetch tide data
	const tideEP = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=predictions&station=${spot.noaa_station_id}&begin_date=${getTodaysDate()}&range=24&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=hilo`;
	const { data: tideData } = useFetch(tideEP, [ spot.noaa_station_id ]);

	// fetch hourly tide data
	const hourlyTideEP = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=predictions&station=${spot.noaa_station_id}&begin_date=${getTodaysDate()}&range=24&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=h`;
	const { data: hourlyTideData } = useFetch(hourlyTideEP, [
		spot.noaa_station_id
	]);

	if (tideData && hourlyTideData) {
		// console.log(tideData.predictions);
		// console.log(hourlyTideData.predictions);
	}

	return (
		<>
    {tideData && (
      <div className="grid-item">
        <Flex gapSm>
          <img src={tidesIcon} alt="Tides Icon" />
          <h3>Tides</h3>
        </Flex>
        <div className="grid-item__body">
          {tideData.predictions.map((tide, idx) => (
            <Flex spaceBetween key={idx}>
              {tide.type === 'H' ? <p>High:</p> : <p>Low:</p>}
              <p>{tide.t}</p>
              <p>{roundNumber(tide.v, 1)} ft</p>
            </Flex>
          ))}
        </div>
        <div className="grid-item__chart"></div>
      </div>
    )}
		</>
	);
};

export default Tides;
