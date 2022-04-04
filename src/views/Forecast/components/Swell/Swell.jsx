import PropTypes from 'prop-types';
// Components
import { LineChart } from '../LineChart';
import { Loading } from '../../../../components/Loading';
import { FetchError } from '../../../../components/FetchError';
// Helpers
import { useFetch } from '../../../../hooks/useFetch';
import {
  convertRoundNumber,
  convertMetersToFeet,
  convertTimeString,
  convertDegToWindDir,
} from '../../../../helpers/conversions.helpers';
// Styles
import { StyledGridItem, StyledGridItemBody, StyledSwellTag } from '../../Forecast.styled';
import { Flex, FlexCol } from '../../../../styles/Utils.styled';
import swellIcon from '../../../../assets/swell.svg';

export const Swell = ({ spot }) => {
  // fetch wave data
  const { response, loading, error } = useFetch(`/api/swell?lat=${spot.lat}&lon=${spot.lon}`);

  return (
    <StyledGridItem>
      {loading && <Loading />}
      {error && <FetchError name="Swell" error={error} />}
      {response && (
        <>
          <SwellHeader />
          <SwellBody
            currentPrimSwellHeight={convertRoundNumber(response.primarySwellHeight.current, 1)}
            currentPrimSwellDirection={convertRoundNumber(response.primarySwellDirection.current, 0)}
            currentPrimSwellPeriod={convertRoundNumber(response.primarySwellPeriod.current, 0)}
            currentSecSwellHeight={convertRoundNumber(response.secondarySwellHeight.current, 1)}
            currentSecSwellDirection={convertRoundNumber(response.secondarySwellDirection.current, 0)}
            currentSecSwellPeriod={convertRoundNumber(response.secondarySwellPeriod.current, 0)}
          />
          <LineChart
            heading="Swell"
            xAxis={response.times.map((hour) => convertTimeString(hour.slice(0, 19), { hour: 'numeric' })).slice(5, 21)}
            yAxis={response.primarySwellHeight.hourly.map((hour) => convertMetersToFeet(hour)).slice(5, 21)}
            yAxisSec={response.secondarySwellHeight.hourly.map((hour) => convertMetersToFeet(hour)).slice(5, 21)}
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
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object, PropTypes.objectOf(PropTypes.array)])
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
