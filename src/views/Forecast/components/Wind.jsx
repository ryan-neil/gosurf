// Components
import BarChart from './Charts/BarChart';
import Loading from '../../../components/Loading/Loading';
import FetchError from '../../../components/FetchError/FetchError';
// Helpers
import { convertTimeString, convertRoundNumber } from '../../../helpers/conversions.helpers';
import { calcTodaysDate } from '../../../helpers/calculations.helpers';
import { useFetch } from '../../../hooks/useFetch';
// Styles
import { StyledGridItem, StyledGridItemBody } from '../Forecast.styled';
import { Flex } from '../../../styles/Utils.styled';
import windIcon from '../../../assets/wind.svg';

const Wind = ({ spot }) => {
  // date formatted for api
  const { fullDate } = calcTodaysDate();

  // fetch current wind data
  const currWindEndpoint = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=wind&station=${spot.noaa_station_id}&date=latest&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=hilo`;
  const {
    response: currWindData,
    loading: currWindLoading,
    error: currWindError
  } = useFetch(currWindEndpoint);

  // fetch hourly wind data
  // response returns data every 6 minutes
  const hourlyWindEndpoint = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=wind&station=${spot.noaa_station_id}&begin_date=${fullDate}&range=24&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=hilo`;
  const {
    response: hourlyWindData,
    loading: hourlyWindLoading,
    error: hourlyWindError
  } = useFetch(hourlyWindEndpoint);

  // render loading until data is populated
  if (currWindLoading || hourlyWindLoading) {
    return <Loading />;
  }

  // if error render error
  if (currWindError || hourlyWindError) {
    return <FetchError name="Wind" error={currWindError || hourlyWindError} />;
  }

  // get wind speeds
  const windSpeeds = hourlyWindData.data.map((hour) => convertRoundNumber(hour.s));

  // get wind times
  const windTimes = hourlyWindData.data.map(
    (hour) => convertTimeString(hour.t, { hour: 'numeric' }) // 6 AM
  );

  return (
    <StyledGridItem>
      <WindHeader />
      <WindBody currWindData={currWindData} windTimes={windTimes} windSpeeds={windSpeeds} />
    </StyledGridItem>
  );
};

// wind header component (presentational)
const WindHeader = () => {
  return (
    <Flex gapSm>
      <img src={windIcon} alt="Wind Icon" />
      <h3>Wind</h3>
    </Flex>
  );
};

// wind body component (presentational)
const WindBody = ({ currWindData, windTimes, windSpeeds }) => {
  return (
    <>
      <StyledGridItemBody>
        <p>Current speed:</p>
        <p className="primary-data">{convertRoundNumber(currWindData.data[0].s, 1)} kts</p>
        <p>{`'${currWindData.data[0].dr}' (${convertRoundNumber(currWindData.data[0].d, 1)}°)`}</p>
      </StyledGridItemBody>
      <BarChart heading="Wind" xAxis={windTimes} yAxis={windSpeeds} />
    </>
  );
};

export default Wind;
