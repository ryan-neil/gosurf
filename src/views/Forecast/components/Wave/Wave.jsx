import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
// api
import * as api from '../../../../services/api';
// components
import FetchLoading from '../../../../components/FetchLoading';
import FetchError from '../../../../components/FetchError';
import BarChart from '../BarChart';
// helpers
import {
  convertRoundNumber,
  convertMetersToFeet,
  convertTimeString,
} from '../../../../helpers/conversions.helpers';
import { calcBodySize } from '../../../../helpers/calculations.helpers';
// styles
import { StyledGridItem, StyledGridItemBody } from '../../Forecast.styled';
import { Flex } from '../../../../styles/Utils.styled';
import waveIcon from '../../../../assets/wave.svg';
// mock api data
// import mockData from '../../../../mocks/waveMockData.json';

const Wave = ({ spot }) => {
  // fetch wave API from react query
  const { isLoading, error, data } = useQuery('waveData', () =>
    api.getWaveData(spot.lat, spot.lon)
  );

  // * mock fetch
  // const data = mockData;
  // const isLoading = false;
  // const error = false;

  return (
    <StyledGridItem>
      {isLoading && <FetchLoading />}
      {error && <FetchError name="Wave" error={error} />}
      {data && (
        <>
          <WaveHeader />
          <WaveBody
            minWaveHeight={convertRoundNumber(convertMetersToFeet(data.waveHeight.min))}
            maxWaveHeight={convertRoundNumber(convertMetersToFeet(data.waveHeight.max))}
          />
          <BarChart
            heading="Wave Height"
            xAxis={data.times
              .map((hour) => convertTimeString(hour.slice(0, 19), { hour: 'numeric' }))
              .slice(5, 21)}
            yAxis={data.waveHeight.hourly
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

export default Wave;
