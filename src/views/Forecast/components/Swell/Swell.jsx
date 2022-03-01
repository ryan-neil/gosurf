// Components
import LineChart from '../Charts/LineChart';
import Loading from '../../../../components/Loading/Loading';
import FetchError from '../../../../components/FetchError/FetchError';
// Helpers
import { calcTodaysDate } from '../../../../helpers/calculations.helpers';
import { useFetch } from '../../../../hooks/useFetch';
import { avgOfArray } from '../../../../helpers/array.helpers';
import {
  convertRoundNumber,
  convertMetersToFeet,
  convertTimeString,
  convertDegToWindDir
} from '../../../../helpers/conversions.helpers';
// Styles
import { StyledGridItem, StyledGridItemBody, StyledSwellTag } from '../../Forecast.styled';
import { Flex, FlexCol } from '../../../../styles/Utils.styled';
import swellIcon from '../../../../assets/swell.svg';

const Swell = ({ spot }) => {
  const { fullDateHyphen } = calcTodaysDate();
  const reqParams = [
    'swellHeight',
    'swellDirection',
    'swellPeriod',
    'secondarySwellHeight',
    'secondarySwellDirection',
    'secondarySwellPeriod'
  ];
  const endpoint = `https://api.stormglass.io/v2/weather/point?lat=${spot.lat}&lng=${spot.lon}&params=${reqParams}&start=${fullDateHyphen}&end=${fullDateHyphen}T23:00`;
  const { response, loading, error } = useFetch(endpoint, {
    headers: {
      Authorization: process.env.REACT_APP_SG_KEY
    }
  });

  // render loading until response from api (this must come before the filtering logic)
  if (loading) {
    return <Loading />;
  }

  // if error render error (this must come before the filtering logic)
  if (error) {
    return <FetchError name="Swell" error={error} />;
  }

  // component logic:
  // get primary swell data
  const primSwellHeights = response.hours.map((hour) => convertMetersToFeet(hour.swellHeight.noaa));
  const primSwellDirections = response.hours.map((hour) =>
    convertRoundNumber(hour.swellDirection.noaa, 0)
  );
  const primSwellPeriods = response.hours.map((hour) =>
    convertRoundNumber(hour.swellPeriod.noaa, 0)
  );
  // get average primary swell data
  const avgPrimSwellHeight = convertRoundNumber(avgOfArray(primSwellHeights), 1);
  const avgPrimSwellDirection = convertRoundNumber(avgOfArray(primSwellDirections), 0);
  const avgPrimSwellPeriod = convertRoundNumber(avgOfArray(primSwellPeriods), 0);

  // get secondary swell data
  const secSwellHeights = response.hours.map((hour) =>
    convertMetersToFeet(hour.secondarySwellHeight.noaa)
  );
  const secSwellDirections = response.hours.map((hour) =>
    convertRoundNumber(hour.secondarySwellDirection.noaa, 0)
  );
  const secSwellPeriods = response.hours.map((hour) =>
    convertRoundNumber(hour.secondarySwellPeriod.noaa, 0)
  );
  // get average secondary swell data
  const avgSecSwellHeight = convertRoundNumber(avgOfArray(secSwellHeights), 1);
  const avgSecSwellDirection = convertRoundNumber(avgOfArray(secSwellDirections), 0);
  const avgSecSwellPeriod = convertRoundNumber(avgOfArray(secSwellPeriods), 0);

  // get swell times
  const swellTimes = response.hours.map(
    // remove last 6 indexes of api time string (remove's: +00:00)
    (hour) => convertTimeString(hour.time.slice(0, 19), { hour: 'numeric' }) // 6 AM
  );

  const renderData = {
    avgPrimSwellHeight,
    avgPrimSwellDirection,
    avgPrimSwellPeriod,
    avgSecSwellHeight,
    avgSecSwellDirection,
    avgSecSwellPeriod
  };

  return (
    <StyledGridItem>
      <SwellHeader />
      <SwellBody data={renderData} />
      <LineChart
        heading="Swell"
        xAxis={swellTimes.slice(5, 21)}
        yAxis={primSwellHeights.slice(5, 21)}
        yAxisSec={secSwellHeights.slice(5, 21)}
      />
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

const SwellBody = ({ data }) => {
  return (
    <StyledGridItemBody swell>
      {/* Primary Swell */}
      <Flex gapSm>
        <StyledSwellTag primary />
        <FlexCol>
          <p>Primary swell:</p>
          <p className="primary-data">{data.avgPrimSwellHeight} ft</p>
          <p>
            '{convertDegToWindDir(data.avgPrimSwellDirection)}' ({data.avgPrimSwellDirection}
            º)
          </p>
          <p>Period: {data.avgPrimSwellPeriod}s</p>
        </FlexCol>
      </Flex>
      {/* Secondary Swell */}
      <Flex gapSm>
        <StyledSwellTag secondary />
        <FlexCol>
          <p>Secondary swell:</p>
          <p className="primary-data">{data.avgSecSwellHeight} ft</p>
          <p>
            '{convertDegToWindDir(data.avgSecSwellDirection)}' ({data.avgSecSwellDirection}º)
          </p>
          <p>Period: {data.avgSecSwellPeriod}s</p>
        </FlexCol>
      </Flex>
    </StyledGridItemBody>
  );
};

export default Swell;
