import PropTypes from 'prop-types';

// Components
import BarChart from './Charts/BarChart';
import { Loading } from '../../../components/Loading';
import { FetchError } from '../../../components/FetchError';
// Helpers
import { convertTimeString, convertRoundNumber } from '../../../helpers/conversions.helpers';
import { useFetch } from '../../../hooks/useFetch';
// Styles
import { StyledGridItem, StyledGridItemBody } from '../Forecast.styled';
import { Flex } from '../../../styles/Utils.styled';
import windIcon from '../../../assets/wind.svg';

const Wind = ({ spot }) => {
  // fetch weather data
  const { response, loading, error } = useFetch(`http://localhost:9001/api/wind?stationId=${spot.station_id}`);

  // if (!response) return null;

  // const currentWindDataData = response.current;
  // const windSpeeds = response.hourly.map((hour) => convertRoundNumber(hour.s));
  // const windTimes = response.hourly.map((hour) => convertTimeString(hour.t, { hour: 'numeric' }));

  return (
    <StyledGridItem>
      {loading && <Loading />}
      {error && <FetchError name="Wind" error={error} />}
      {response && (
        <>
          <WindHeader />
          <WindBody
            currentWindData={response.current}
            windTimes={response.hourly.map((hour) => convertTimeString(hour.t, { hour: 'numeric' }))}
            windSpeeds={response.hourly.map((hour) => convertRoundNumber(hour.s))}
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
const WindBody = ({ currentWindData, windTimes, windSpeeds }) => {
  return (
    <>
      <StyledGridItemBody>
        <p>Current speed:</p>
        <p className="primary-data">{convertRoundNumber(currentWindData.s, 1)} kts</p>
        <p>{`'${currentWindData.dr}' (${convertRoundNumber(currentWindData.d, 1)}°)`}</p>
      </StyledGridItemBody>
      <BarChart heading="Wind" xAxis={windTimes} yAxis={windSpeeds} />
    </>
  );
};

// prop types
Wind.propTypes = {
  spot: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])).isRequired,
};
WindBody.propTypes = {
  currentWindData: PropTypes.objectOf(PropTypes.string).isRequired,
  windTimes: PropTypes.arrayOf(PropTypes.string).isRequired,
  windSpeeds: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Wind;
