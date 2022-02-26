import { calcSunTimes } from '../../../../helpers/calculations.helpers';
import { useFetch } from '../../../../hooks/useFetch';
// Components
import Loading from '../../../../components/Loading/Loading';
import FetchError from '../../../../components/FetchError/FetchError';
// Styles
import { StyledBanner, StyledBannerItem } from './Banner.styled';
import { Flex } from '../../../../styles/Utils.styled';
import waterIcon from '../../../../assets/water.svg';
import airIcon from '../../../../assets/air.svg';

const Banner = ({ spot }) => {
  // get sunrise and sunset
  const { sunrise, sunset } = calcSunTimes(spot.lat, spot.lon);

  // fetch air temperature data
  const airTempEndpoint = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=air_temperature&station=${spot.noaa_station_id}&date=latest&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=hilo`;
  const { response: airData, loading: airLoading, error: airError } = useFetch(airTempEndpoint);

  // fetch water temperature data
  const waterTempEndpoint = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=water_temperature&station=${spot.noaa_station_id}&date=latest&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=hilo`;
  const {
    response: waterData,
    loading: waterLoading,
    error: waterError
  } = useFetch(waterTempEndpoint);

  return (
    <StyledBanner>
      {airLoading && <Loading />}
      {airData && waterData && !airLoading ? (
        <>
          <StyledBannerItem>
            <h4>Water Temperature</h4>
            <Flex gapSm>
              <img src={waterIcon} alt="Water Temperature Icon" />
              <p>{`${waterData.data[0].v}°F`}</p>
            </Flex>
          </StyledBannerItem>
          <StyledBannerItem>
            <h4>Air Temperature</h4>
            <Flex gapSm>
              <img src={airIcon} alt="Air Temperature Icon" />
              <p>{`${airData.data[0].v}°F`}</p>
            </Flex>
          </StyledBannerItem>
          <StyledBannerItem>
            <h4>Light</h4>
            <Flex spaceBetween gapSm>
              <p>Sunrise:</p>
              <p>
                <span className="light">{sunrise}</span>
              </p>
            </Flex>
            <Flex spaceBetween gapSm>
              <p>Sunset:</p>
              <p>
                <span className="light">{sunset}</span>
              </p>
            </Flex>
          </StyledBannerItem>
          <StyledBannerItem>
            <h4>Ideal Conditions</h4>
            <Flex spaceBetween gapSm>
              <p>Height:</p>
              <p className="ideal-cond">{spot.ideal_conditions.surf_height}</p>
              <p>Tide:</p>
              <p className="ideal-cond">{spot.ideal_conditions.tide}</p>
            </Flex>
            <Flex spaceBetween gapSm>
              <p>Wind:</p>
              <p className="ideal-cond">'{spot.ideal_conditions.wind}'</p>
              <p>Swell:</p>
              <p className="ideal-cond">'{spot.ideal_conditions.swell_direction}'</p>
            </Flex>
          </StyledBannerItem>
        </>
      ) : (
        airError && !airLoading && <FetchError name="Weather" error={airError} />
      )}
    </StyledBanner>
  );
};

export default Banner;
