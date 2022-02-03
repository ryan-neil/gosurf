import { useFetch } from '../hooks/useFetch';
import { getTodaysDate, roundNumber } from '../helpers/helpers';
// styles
import { Flex } from './styles/Utils.styled';
import windIcon from '../assets/wind.svg';

const Wind = ({ spot }) => {
	// Resource: https://api.tidesandcurrents.noaa.gov/api/prod/

	// fetch wind data
	const windEndpoint = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=wind&station=${spot.noaa_station_id}&date=latest&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=hilo`;
	const { data: windData } = useFetch(windEndpoint, [
		spot.noaa_station_id
	]);

	// fetch hourly wind data
	const hourlyWindEndpoint = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=wind&station=${spot.noaa_station_id}&begin_date=${getTodaysDate()}&range=24&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=h`;
	const { data: hourlyWindData } = useFetch(hourlyWindEndpoint, [
		spot.noaa_station_id
	]);

	if (windData && hourlyWindData) {
		// console.log(windData.data);
		// console.log(hourlyWindData.predictions);
	}

	return (
    <>
    {windData && (
      <div className="grid-item">
        <Flex gapSm>
          <img src={windIcon} alt="Wind Icon" />
          <h3>Wind</h3>
        </Flex>
        <div className="grid-item__body">
          <p>Current speed:</p>
          <p className="wind-speed">
            {roundNumber(windData.data[0].s, 1)} kts
          </p>
          <p>
            '{windData.data[0].dr}' ({roundNumber(windData.data[0].d, 1)}°)
          </p>
        </div>
        <div className="grid-item__chart"></div>
      </div>
    )}
    </>
	);
};

export default Wind;
