import PropTypes from 'prop-types';
// import { useQuery } from 'react-query';
// api
// import * as api from '../../../../services/api';
// components
import BarChart from '../BarChart';
import FetchLoading from '../../../../components/FetchLoading';
import FetchError from '../../../../components/FetchError';
// helpers
import { useFetch } from '../../../../hooks/useFetch';
import { convertRoundNumber, convertMilitaryToReg } from '../../../../helpers/conversions.helpers';
// styles
import { StyledGridItem, StyledGridItemBody } from '../../Forecast.styled';
import { Flex } from '../../../../styles/Utils.styled';
import windIcon from '../../../../assets/wind.svg';
// mock api data
// import mockData from '../../../../mocks/windMockData.json';

const Wind = ({ spot }) => {
  // fetch wind API from react query
  // const { isLoading, error, data } = useQuery('windData', () => api.getWindData(spot.station_id));
  const { isLoading, error, data } = useFetch(`/api/wind?stationId=${spot.station_id}`);

  // * mock fetch
  // const data = mockData;
  // const isLoading = false;
  // const error = false;

  return (
    <StyledGridItem>
      {isLoading && <FetchLoading />}
      {error && <FetchError name="Wind" error={error} />}
      {data && (
        <>
          <WindHeader />
          <WindBody currentWindData={data.current} />
          <BarChart
            heading="Wind"
            xAxis={data.hourly.map((hour) => convertMilitaryToReg(hour.t).short)} // this is where the bug is occurring (TypeError: can't access property "map", r.hourly is undefined)
            yAxis={data.hourly.map((hour) => convertRoundNumber(hour.s))}
          />
        </>
      )}
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
const WindBody = ({ currentWindData }) => {
  return (
    <StyledGridItemBody>
      <p>Current speed:</p>
      <p className="primary-data">{convertRoundNumber(currentWindData.s, 1)} kts</p>
      <p>{`'${currentWindData.dr}' (${convertRoundNumber(currentWindData.d, 1)}°)`}</p>
    </StyledGridItemBody>
  );
};

// prop types
Wind.propTypes = {
  spot: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
  ).isRequired,
};
WindBody.propTypes = {
  currentWindData: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Wind;
