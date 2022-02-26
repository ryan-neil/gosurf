import { calcTodaysDate } from '../../../../helpers/calculations.helpers';
import { useFetch } from '../../../../hooks/useFetch';
// Components
import WindBody from './WindBody';
import Loading from '../../../../components/Loading/Loading';
import FetchError from '../../../../components/FetchError/FetchError';
// Styles
import { StyledGridItem } from '../../Forecast.styled';
import { Flex } from '../../../../styles/Utils.styled';
import windIcon from '../../../../assets/wind.svg';

const Wind = ({ spot }) => {
  // get api endpoint date
  const { fullDate } = calcTodaysDate();

  // fetch current wind data
  const currWindEndpoint = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=wind&station=${spot.noaa_station_id}&date=latest&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=hilo`;
  const { response: currWindData, loading, error } = useFetch(currWindEndpoint);

  // fetch hourly wind data
  const hourlyWindEndpoint = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=wind&station=${spot.noaa_station_id}&begin_date=${fullDate}&range=24&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=h`;
  const { response: hourlyWindData } = useFetch(hourlyWindEndpoint);

  if (!currWindData && !loading) {
    <FetchError name="Wind" error={error} />;
    // return null;
  }

  return (
    <StyledGridItem>
      {/* Heading */}
      <Flex gapSm>
        <img src={windIcon} alt="Wind Icon" />
        <h3>Wind</h3>
      </Flex>
      {/* Body */}
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
