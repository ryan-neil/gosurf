import PropTypes from 'prop-types';
// components
import { Loading } from '../../../../components/Loading';
import { FetchError } from '../../../../components/FetchError';
import { BarChart } from '../BarChart';
// helpers
// import mockData from '../../../../mocks/waveMockData.json';
import { useFetch } from '../../../../hooks/useFetch';
import {
  convertRoundNumber,
  convertMetersToFeet,
  convertTimeString,
} from '../../../../helpers/conversions.helpers';
import { calcBodySize } from '../../../../helpers/calculations.helpers';
// Styles
import { StyledGridItem, StyledGridItemBody } from '../../Forecast.styled';
import { Flex } from '../../../../styles/Utils.styled';
import waveIcon from '../../../../assets/wave.svg';

export const Wave = ({ spot }) => {
  // fetch wave data
  const { response, loading, error } = useFetch(`/api/wave?lat=${spot.lat}&lon=${spot.lon}`);
  // mock data
  // const response = mockData;
  // const loading = false;
  // const error = false;

  // const waveTimes = response.times.map((wave) => convertTimeString(wave.slice(0, 19), { hour: 'numeric' }));
  // const waveHeights = response.waveHeight.hourly.map((wave) => convertRoundNumber(convertMetersToFeet(wave)));
  // const minWaveHeight = convertRoundNumber(convertMetersToFeet(response.waveHeight.min));
  // const maxWaveHeight = convertRoundNumber(convertMetersToFeet(response.waveHeight.max));

  return (
    <StyledGridItem>
      {loading && <Loading />}
      {error && <FetchError name="Wave" error={error} />}
      {response && (
        <>
          <WaveHeader />
          <WaveBody
            minWaveHeight={convertRoundNumber(convertMetersToFeet(response.waveHeight.min))}
            maxWaveHeight={convertRoundNumber(convertMetersToFeet(response.waveHeight.max))}
          />
          <BarChart
            heading="Wave Height"
            xAxis={response.times
              .map((hour) => convertTimeString(hour.slice(0, 19), { hour: 'numeric' }))
              .slice(5, 21)}
            yAxis={response.waveHeight.hourly
              .map((hour) => convertRoundNumber(convertMetersToFeet(hour)))
              .slice(5, 21)}
          />
        </>
      )}
    </StyledGridItem>
  );
};

// Wave Header component
const WaveHeader = () => {
  return (
    <Flex gapSm>
      <img src={waveIcon} alt="Wave Height Icon" />
      <h3>Wave Height</h3>
    </Flex>
  );
};

// Wave Body component
const WaveBody = ({ minWaveHeight, maxWaveHeight }) => {
  // if min and max wave heights are the same only render the max number
  const getWaveHeight =
    minWaveHeight === maxWaveHeight
      ? `${maxWaveHeight} ft`
      : `${minWaveHeight}-${maxWaveHeight} ft`;

  return (
    <StyledGridItemBody>
      <p>Todays 'buoy' range:</p>
      <p className="primary-data">{getWaveHeight}</p>
      {calcBodySize(minWaveHeight, maxWaveHeight)}
    </StyledGridItemBody>
  );
};

// prop types
Wave.propTypes = {
  spot: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
      PropTypes.objectOf(PropTypes.array),
    ])
  ).isRequired,
};
WaveBody.propTypes = {
  minWaveHeight: PropTypes.number.isRequired,
  maxWaveHeight: PropTypes.number.isRequired,
};
