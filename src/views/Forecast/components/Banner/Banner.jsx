import PropTypes from 'prop-types';
// helpers
import { useFetch } from '../../../../hooks/useFetch';
import { calcSunTimes } from '../../../../helpers/calculations.helpers';
// components
import { Loading } from '../../../../components/Loading';
import { FetchError } from '../../../../components/FetchError';
// styles
import { StyledBanner, StyledBannerItem, StyledWaterIcon, StyledAirIcon } from './Banner.styled';
import { Flex } from '../../../../styles/Utils.styled';
// mock api data
// import mockData from '../../../../mocks/bannerMockData.json';

export const Banner = ({ spot }) => {
  // get sunrise and sunset
  const { sunrise, sunset } = calcSunTimes(spot.lat, spot.lon);

  // fetch weather data
  const { response, loading, error } = useFetch(`/api/weather?stationId=${spot.station_id}`);
  // mock fetch
  // const response = mockData;
  // const loading = false;
  // const error = false;

  return (
    <StyledBanner>
      {loading && <Loading />}
      {error && <FetchError name="Weather" error={error} />}
      {response && (
        <>
          <StyledBannerItem>
            <h3>Water Temperature</h3>
            <Flex gapSm center>
              <StyledWaterIcon />
              <h4>{`${response.waterTemp}°F`}</h4>
            </Flex>
          </StyledBannerItem>
          <StyledBannerItem>
            <h3>Air Temperature</h3>
            <Flex gapSm center>
              <StyledAirIcon />
              <h4>{`${response.airTemp}°F`}</h4>
            </Flex>
          </StyledBannerItem>
          <StyledBannerItem>
            <h3>Light</h3>
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
            <h3>Ideal Conditions</h3>
            <Flex gapSm>
              <p>
                Height: <span className="ideal-cond">{spot.ideal_conditions.surf_height}</span>
              </p>
              <p>
                Tide: <span className="ideal-cond">{spot.ideal_conditions.tide}</span>
              </p>
            </Flex>
            <Flex gapSm>
              <p>
                Wind: <span className="ideal-cond">{spot.ideal_conditions.wind}</span>
              </p>
              <p>
                Swell: <span className="ideal-cond">{spot.ideal_conditions.swell_direction}</span>
              </p>
            </Flex>
          </StyledBannerItem>
        </>
      )}
    </StyledBanner>
  );
};

// prop types
Banner.propTypes = {
  spot: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
      PropTypes.objectOf(PropTypes.array),
    ])
  ).isRequired,
};
