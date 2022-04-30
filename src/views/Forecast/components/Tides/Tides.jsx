import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
// api
import * as api from '../../../../services/api';
// helpers
import { convertRoundNumber, convertMilitaryToReg } from '../../../../helpers/conversions.helpers';
// components
import LineChart from '../LineChart';
import FetchLoading from '../../../../components/FetchLoading';
import FetchError from '../../../../components/FetchError';
// styles
import { StyledGridItem, StyledGridItemBody } from '../../Forecast.styled';
import { Flex } from '../../../../styles/Utils.styled';
import tidesIcon from '../../../../assets/tides.svg';
// mock api data
// import mockData from '../../../../mocks/tidesMockData.json';

const Tides = ({ spot }) => {
  // fetch tides API from react query
  const { isLoading, error, data } = useQuery('tidesData', () => api.getTidesData(spot.station_id));

  // * mock fetch
  // const data = mockData;
  // const isLoading = false;
  // const error = false;

  return (
    <StyledGridItem>
      {isLoading && <FetchLoading />}
      {error && <FetchError name="Tides" error={error} />}
      {data && (
        <>
          <TidesHeader />
          <TidesBody todaysTides={data.current} />
          <LineChart
            heading="Tides"
            xAxis={data.hourly.map((hour) => convertMilitaryToReg(hour.t).short).slice(5, 21)}
            yAxis={data.hourly.map((hour) => convertRoundNumber(hour.v, 2)).slice(5, 21)}
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

export default Tides;
