import PropTypes from 'prop-types';
// components
import { BarChart } from '../BarChart';
import { Loading } from '../../../../components/Loading';
import { FetchError } from '../../../../components/FetchError';
// helpers
// import mockData from '../../../../mocks/windMockData.json';
import { useFetch } from '../../../../hooks/useFetch';
import { convertRoundNumber, convertMilitaryToReg } from '../../../../helpers/conversions.helpers';
// styles
import { StyledGridItem, StyledGridItemBody } from '../../Forecast.styled';
import { Flex } from '../../../../styles/Utils.styled';
import windIcon from '../../../../assets/wind.svg';

export const Wind = ({ spot }) => {
  // fetch weather data
  const { response, loading, error } = useFetch(`/api/wind?stationId=${spot.station_id}`);
  // mock data
  // const response = mockData;
  // const loading = false;
  // const error = false;

  return (
    <StyledGridItem>
      {loading && <Loading />}
      {error && <FetchError name="Wind" error={error} />}
      {response && (
        <>
          <WindHeader />
          <WindBody currentWindData={response.current} />
          <BarChart
            heading="Wind"
            xAxis={response.hourly.map((hour) => convertMilitaryToReg(hour.t).short)} // this is where the bug is occurring (TypeError: can't access property "map", r.hourly is undefined)
            yAxis={response.hourly.map((hour) => convertRoundNumber(hour.s))}
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
