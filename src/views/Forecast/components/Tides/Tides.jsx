import { calcTodaysDate } from '../../../../helpers/calculations.helpers';
import { useFetch } from '../../../../hooks/useFetch';
// Components
import TidesBody from './TidesBody';
import Loading from '../../../../components/Loading/Loading';
import FetchError from '../../../../components/FetchError/FetchError';
// Styles
import { StyledGridItem } from '../../Forecast.styled';
import { Flex } from '../../../../styles/Utils.styled';
import tidesIcon from '../../../../assets/tides.svg';

const Tides = ({ spot }) => {
  const { fullDate } = calcTodaysDate();

  // fetch tide data
  const currTideEndpoint = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=predictions&station=${spot.noaa_station_id}&begin_date=${fullDate}&range=24&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=hilo`;
  const { response: currTideData, loading, error } = useFetch(currTideEndpoint);

  // fetch hourly tide data
  const hourlyTideEndpoint = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=predictions&station=${spot.noaa_station_id}&begin_date=${fullDate}&range=24&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=h`;
  const { response: hourlyTidesData } = useFetch(hourlyTideEndpoint);

  if (!currTideData && !loading) {
    <FetchError name="Tides" error={error} />;
    // return null;
  }

  return (
    <StyledGridItem>
      {/* Heading */}
      <Flex gapSm>
        <img src={tidesIcon} alt="Tides Icon" />
        <h3>Tides</h3>
      </Flex>
      {/* Body */}
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
