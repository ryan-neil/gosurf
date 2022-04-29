import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
// helpers
import { calcSunTimes } from '../../../../helpers/calculations.helpers';
// components
import FetchLoading from '../../../../components/FetchLoading';
import FetchError from '../../../../components/FetchError';
// styles
import { StyledBanner, StyledBannerItem, StyledWaterIcon, StyledAirIcon } from './Banner.styled';
import { Flex } from '../../../../styles/Utils.styled';
// mock api data
// import mockData from '../../../../mocks/bannerMockData.json';

const Banner = ({ spot }) => {
  // get sunrise and sunset
  const { sunrise, sunset } = calcSunTimes(spot.lat, spot.lon);
  // fetch weather API from react query
  const { isLoading, error, data } = useQuery('spots', () =>
    fetch(`/api/weather?stationId=${spot.station_id}`).then((res) => res.json())
  );
  // mock fetch
  // const data = mockData;
  // const isLoading = false;
  // const error = false;

  return (
    <StyledBanner>
      {isLoading && <FetchLoading />}
      {error && <FetchError name="Weather" error={error} />}
      {data && (
        <>
          <StyledBannerItem>
            <h3>Water Temperature</h3>
            <Flex gapSm center>
              <StyledWaterIcon />
              <h4>{`${data.waterTemp}°F`}</h4>
            </Flex>
          </StyledBannerItem>
          <StyledBannerItem>
            <h3>Air Temperature</h3>
            <Flex gapSm center>
              <StyledAirIcon />
              <h4>{`${data.airTemp}°F`}</h4>
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

export default Banner;
