// Helpers
import { convertRoundNumber, convertTimeString } from '../../../../helpers/conversions.helpers';
import { calcTodaysDate } from '../../../../helpers/calculations.helpers';
import { useFetch } from '../../../../hooks/useFetch';
// Components
import LineChart from '../Charts/LineChart';
import Loading from '../../../../components/Loading/Loading';
import FetchError from '../../../../components/FetchError/FetchError';
// Styles
import { StyledGridItem, StyledGridItemBody } from '../../Forecast.styled';
import { Flex } from '../../../../styles/Utils.styled';
import tidesIcon from '../../../../assets/tides.svg';

const Tides = ({ spot }) => {
  // date formatted for api
  const { fullDate } = calcTodaysDate();

  // fetch current tide data
  const currTideEndpoint = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=predictions&station=${spot.noaa_station_id}&begin_date=${fullDate}&range=24&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=hilo`;
  const {
    response: currTideData,
    loading: currTideLoading,
    error: currTideError
  } = useFetch(currTideEndpoint);

  // fetch hourly tide data
  const hourlyTideEndpoint = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=predictions&station=${spot.noaa_station_id}&begin_date=${fullDate}&range=24&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=h`;
  const {
    response: hourlyTidesData,
    loading: hourlyTidesLoading,
    error: hourlyTidesError
  } = useFetch(hourlyTideEndpoint);

  // render loading until data is populated
  if (currTideLoading || hourlyTidesLoading) {
    return <Loading />;
  }

  // if error render error
  if (currTideError || hourlyTidesError) {
    return <FetchError name="Tides" error={currTideError || hourlyTidesError} />;
  }

  // get tides heights
  const tidesHeights = hourlyTidesData.predictions.map((hour) => convertRoundNumber(hour.v, 2));

  // get tides times
  const tidesTimes = hourlyTidesData.predictions.map(
    (hour) => convertTimeString(hour.t, { hour: 'numeric' }) // 6 AM
  );

  return (
    <StyledGridItem>
      <TidesHeader />
      <TidesBody tidesTimes={tidesTimes} tidesHeights={tidesHeights} currTideData={currTideData} />
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
const TidesBody = ({ currTideData, tidesTimes, tidesHeights }) => {
  // loop through current tide data and render the information
  const TideItem = currTideData.predictions.map((tide, idx) => (
    <Flex gapMd spaceBetween key={idx}>
      {tide.type === 'H' ? <p>High:</p> : <p>Low:</p>}
      <p>{convertTimeString(tide.t, { timeStyle: 'short' })}</p>
      <p>{convertRoundNumber(tide.v, 2)} ft</p>
    </Flex>
  ));

  return (
    <>
      <StyledGridItemBody tide>{TideItem}</StyledGridItemBody>
      <LineChart
        heading="Tides"
        xAxis={tidesTimes.slice(5, 21)}
        yAxis={tidesHeights.slice(5, 21)}
      />
    </>
  );
};

export default Tides;
