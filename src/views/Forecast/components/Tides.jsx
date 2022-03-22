import PropTypes from 'prop-types';
// Helpers
import { convertRoundNumber, convertTimeString } from '../../../helpers/conversions.helpers';
import { useFetch } from '../../../hooks/useFetch';
// Components
import LineChart from './Charts/LineChart';
import { Loading } from '../../../components/Loading';
import { FetchError } from '../../../components/FetchError';
// Styles
import { StyledGridItem, StyledGridItemBody } from '../Forecast.styled';
import { Flex } from '../../../styles/Utils.styled';
import tidesIcon from '../../../assets/tides.svg';

const Tides = ({ spot }) => {
  // fetch tides data
  const { response, loading, error } = useFetch(`http://localhost:9001/api/tides?stationId=${spot.station_id}`);

  // const todaysTides = response.current;
  // const tidesHeights = response.hourly.map((hour) => convertRoundNumber(hour.v, 2));
  // const tidesTimes = response.hourly.map((hour) => convertTimeString(hour.t, { hour: 'numeric' }));

  return (
    <StyledGridItem>
      {loading && <Loading />}
      {error && <FetchError name="Tides" error={error} />}
      {response && (
        <>
          <TidesHeader />
          <TidesBody
            tidesTimes={response.hourly.map((hour) => convertTimeString(hour.t, { hour: 'numeric' }))}
            tidesHeights={response.hourly.map((hour) => convertRoundNumber(hour.v, 2))}
            todaysTides={response.current}
          />
        </>
      )}
    </StyledGridItem>
  );
};

// tides header render component
const TidesHeader = () => {
  return (
    <Flex gapSm>
      <img src={tidesIcon} alt="Tides Icon" />
      <h3>Tides</h3>
    </Flex>
  );
};

// tides body render component
const TidesBody = ({ tidesTimes, tidesHeights, todaysTides }) => {
  // loop through current tide data and render the information
  const TideItem = todaysTides.map((tide, idx) => (
    <Flex gapMd spaceBetween key={idx}>
      {tide.type === 'H' ? <p>High:</p> : <p>Low:</p>}
      <p>{convertTimeString(tide.t, { timeStyle: 'short' })}</p>
      <p>{convertRoundNumber(tide.v, 2)} ft</p>
    </Flex>
  ));

  return (
    <>
      <StyledGridItemBody tide>{TideItem}</StyledGridItemBody>
      <LineChart heading="Tides" xAxis={tidesTimes.slice(5, 21)} yAxis={tidesHeights.slice(5, 21)} />
    </>
  );
};

// prop types
Tides.propTypes = {
  spot: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])).isRequired,
};
TidesBody.propTypes = {
  tidesTimes: PropTypes.arrayOf(PropTypes.string).isRequired,
  tidesHeights: PropTypes.arrayOf(PropTypes.number).isRequired,
  todaysTides: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default Tides;
