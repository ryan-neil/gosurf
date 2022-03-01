// Components
import Loading from '../../../../components/Loading/Loading';
import FetchError from '../../../../components/FetchError/FetchError';
import BarChart from '../Charts/BarChart';
// Helpers
import {
  convertRoundNumber,
  convertMetersToFeet,
  convertTimeString
} from '../../../../helpers/conversions.helpers';
import { calcTodaysDate, calcBodySize } from '../../../../helpers/calculations.helpers';
import { useFetch } from '../../../../hooks/useFetch';
// Styles
import { StyledGridItem, StyledGridItemBody } from '../../Forecast.styled';
import { Flex } from '../../../../styles/Utils.styled';
import waveIcon from '../../../../assets/wave.svg';

const Wave = ({ spot }) => {
  // Resource: https://daveceddia.com/react-before-render/
  // Resource: https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/

  const { fullDateHyphen } = calcTodaysDate();
  const reqParams = ['waveHeight', 'wavePeriod'];
  const endpoint = `https://api.stormglass.io/v2/weather/point?lat=${spot.lat}&lng=${spot.lon}&params=${reqParams}&start=${fullDateHyphen}&end=${fullDateHyphen}T23:00`;
  const { response, loading, error } = useFetch(endpoint, {
    headers: {
      Authorization: process.env.REACT_APP_SG_KEY
    }
  });

  // render loading until data is populated
  if (loading) {
    return <Loading />;
  }

  // if error render error
  if (error) {
    return <FetchError name="Wave" error={error} />;
  }

  // all logic
  // get wave heights
  const waveHeights = response.hours.map((wave) =>
    convertRoundNumber(convertMetersToFeet(wave.waveHeight.noaa))
  );
  // get minimum wave height
  const minWaveHeight = convertRoundNumber(Math.min(...waveHeights));
  // get maximum wave height
  const maxWaveHeight = convertRoundNumber(Math.max(...waveHeights));

  // get wave times
  const waveTimes = response.hours.map(
    // remove last 6 indexes of api time string (remove's: +00:00)
    (wave) => convertTimeString(wave.time.slice(0, 19), { hour: 'numeric' }) // 6 AM
  );

  return (
    <StyledGridItem>
      <WaveHeader />
      <WaveBody
        minWaveHeight={minWaveHeight}
        maxWaveHeight={maxWaveHeight}
        waveTimes={waveTimes}
        waveHeights={waveHeights}
      />
    </StyledGridItem>
  );
};

const WaveHeader = () => {
  return (
    <Flex gapSm>
      <img src={waveIcon} alt="Wave Height Icon" />
      <h3>Wave Height</h3>
    </Flex>
  );
};

const WaveBody = ({ minWaveHeight, maxWaveHeight, waveTimes, waveHeights }) => {
  const getWaveHeight =
    minWaveHeight === maxWaveHeight
      ? `${maxWaveHeight} ft`
      : `${minWaveHeight}-${maxWaveHeight} ft`;

  return (
    <>
      <StyledGridItemBody>
        <p>Todays range:</p>
        <p className="primary-data">{getWaveHeight}</p>
        {calcBodySize(minWaveHeight, maxWaveHeight)}
      </StyledGridItemBody>
      <BarChart
        heading="Wave Height"
        xAxis={waveTimes.slice(5, 21)}
        yAxis={waveHeights.slice(5, 21)}
      />
    </>
  );
};

export default Wave;
