import PropTypes from 'prop-types';
// helpers
// import mockData from '../../../../mocks/tidesMockData.json';
import { useFetch } from '../../../../hooks/useFetch';
import { convertRoundNumber, convertMilitaryToReg } from '../../../../helpers/conversions.helpers';
// components
import { LineChart } from '../LineChart';
import { Loading } from '../../../../components/Loading';
import { FetchError } from '../../../../components/FetchError';
// styles
import { StyledGridItem, StyledGridItemBody } from '../../Forecast.styled';
import { Flex } from '../../../../styles/Utils.styled';
import tidesIcon from '../../../../assets/tides.svg';

export const Tides = ({ spot }) => {
  // fetch tides data
  const { response, loading, error } = useFetch(`/api/tides?stationId=${spot.station_id}`);
  // mock fetch
  // const response = mockData;
  // const loading = false;
  // const error = false;

  return (
    <StyledGridItem>
      {loading && <Loading />}
      {error && <FetchError name="Tides" error={error} />}
      {response && (
        <>
          <TidesHeader />
          <TidesBody todaysTides={response.current} />
          <LineChart
            heading="Tides"
            xAxis={response.hourly.map((hour) => convertMilitaryToReg(hour.t).short).slice(5, 21)}
            yAxis={response.hourly.map((hour) => convertRoundNumber(hour.v, 2)).slice(5, 21)}
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
const TidesBody = ({ todaysTides }) => {
  return (
    <StyledGridItemBody tide>
      {todaysTides.map((tide, idx) => (
        <Flex gapMd spaceBetween key={idx}>
          {tide.type === 'H' ? <p>High:</p> : <p>Low:</p>}
          <p>{convertMilitaryToReg(tide.t).long}</p>
          <p>{convertRoundNumber(tide.v, 2)} ft</p>
        </Flex>
      ))}
    </StyledGridItemBody>
  );
};

// prop types
Tides.propTypes = {
  spot: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
      PropTypes.objectOf(PropTypes.array),
    ])
  ).isRequired,
};
TidesBody.propTypes = {
  todaysTides: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
