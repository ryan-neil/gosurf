import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
// components
import LineChart from '../LineChart';
import FetchLoading from '../../../../components/FetchLoading';
import FetchError from '../../../../components/FetchError';
// helpers
import {
  convertRoundNumber,
  convertMetersToFeet,
  convertTimeString,
  convertDegToWindDir,
} from '../../../../helpers/conversions.helpers';
// styles
import { StyledGridItem, StyledGridItemBody, StyledSwellTag } from '../../Forecast.styled';
import { Flex, FlexCol } from '../../../../styles/Utils.styled';
import swellIcon from '../../../../assets/swell.svg';
// mock api data
// import mockData from '../../../../mocks/swellMockData.json';

const Swell = ({ spot }) => {
  // fetch swell API from react query
  const { isLoading, error, data } = useQuery('swellData', () =>
    fetch(`/api/swell?lat=${spot.lat}&lon=${spot.lon}`).then((res) => res.json())
  );
  // mock fetch
  // const data = mockData;
  // const isLoading = false;
  // const error = false;

  return (
    <StyledGridItem>
      {isLoading && <FetchLoading />}
      {error && <FetchError name="Swell" error={error} />}
      {data && (
        <>
          <SwellHeader />
          <SwellBody
            currentPrimSwellHeight={convertRoundNumber(data.primarySwellHeight.current, 1)}
            currentPrimSwellDirection={convertRoundNumber(data.primarySwellDirection.current, 0)}
            currentPrimSwellPeriod={convertRoundNumber(data.primarySwellPeriod.current, 0)}
            currentSecSwellHeight={convertRoundNumber(data.secondarySwellHeight.current, 1)}
            currentSecSwellDirection={convertRoundNumber(data.secondarySwellDirection.current, 0)}
            currentSecSwellPeriod={convertRoundNumber(data.secondarySwellPeriod.current, 0)}
          />
          <LineChart
            heading="Swell"
            xAxis={data.times
              .map((hour) => convertTimeString(hour.slice(0, 19), { hour: 'numeric' }))
              .slice(5, 21)}
            yAxis={data.primarySwellHeight.hourly
              .map((hour) => convertMetersToFeet(hour))
              .slice(5, 21)}
            yAxisSec={data.secondarySwellHeight.hourly
              .map((hour) => convertMetersToFeet(hour))
              .slice(5, 21)}
          />
        </>
      )}
    </StyledGridItem>
  );
};

const SwellHeader = () => {
  return (
    <Flex gapSm>
      <img src={swellIcon} alt="Swell Icon" />
      <h3>Swell</h3>
    </Flex>
  );
};

const SwellBody = ({
  currentPrimSwellHeight,
  currentPrimSwellDirection,
  currentPrimSwellPeriod,
  currentSecSwellHeight,
  currentSecSwellDirection,
  currentSecSwellPeriod,
}) => {
  return (
    <StyledGridItemBody swell>
      {/* Primary Swell */}
      <Flex gapSm>
        <StyledSwellTag primary />
        <FlexCol>
          <p>Primary swell:</p>
          <p className="primary-data">{currentPrimSwellHeight} ft</p>
          <p>
            '{convertDegToWindDir(currentPrimSwellDirection)}' ({currentPrimSwellDirection}
            º)
          </p>
          <p>Period: {currentPrimSwellPeriod}s</p>
        </FlexCol>
      </Flex>
      {/* Secondary Swell */}
      <Flex gapSm>
        <StyledSwellTag secondary />
        <FlexCol>
          <p>Secondary swell:</p>
          <p className="primary-data">{currentSecSwellHeight} ft</p>
          <p>
            '{convertDegToWindDir(currentSecSwellDirection)}' ({currentSecSwellDirection}º)
          </p>
          <p>Period: {currentSecSwellPeriod}s</p>
        </FlexCol>
      </Flex>
    </StyledGridItemBody>
  );
};

// prop types
Swell.propTypes = {
  spot: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
      PropTypes.objectOf(PropTypes.array),
    ])
  ).isRequired,
};
SwellBody.propTypes = {
  currentPrimSwellHeight: PropTypes.number.isRequired,
  currentPrimSwellDirection: PropTypes.number.isRequired,
  currentPrimSwellPeriod: PropTypes.number.isRequired,
  currentSecSwellHeight: PropTypes.number.isRequired,
  currentSecSwellDirection: PropTypes.number.isRequired,
  currentSecSwellPeriod: PropTypes.number.isRequired,
};

export default Swell;
