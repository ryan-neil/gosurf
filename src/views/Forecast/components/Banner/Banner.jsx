import PropTypes from 'prop-types';
// Helpers
import { calcSunTimes } from '../../../../helpers/calculations.helpers';
import { useFetch } from '../../../../hooks/useFetch';
// Components
import { Loading } from '../../../../components/Loading';
import { FetchError } from '../../../../components/FetchError';
// Styles
import { StyledBanner, StyledBannerItem } from './Banner.styled';
import { Flex } from '../../../../styles/Utils.styled';
import waterIcon from '../../../../assets/water.svg';
import airIcon from '../../../../assets/air.svg';

export const Banner = ({ spot }) => {
  // get sunrise and sunset
  const { sunrise, sunset } = calcSunTimes(spot.lat, spot.lon);

  // fetch weather data
  const { response, loading, error } = useFetch(`http://localhost:9001/api/weather?stationId=${spot.station_id}`);

  return (
    <StyledBanner>
      {loading && <Loading />}
      {error && <FetchError name="Weather" error={error} />}
      {response && (
        <>
          <StyledBannerItem>
            <h4>Water Temperature</h4>
            <Flex gapSm>
              <img src={waterIcon} alt="Water Temperature Icon" />
              <p>{`${response.waterTemp}°F`}</p>
            </Flex>
          </StyledBannerItem>
          <StyledBannerItem>
            <h4>Air Temperature</h4>
            <Flex gapSm>
              <img src={airIcon} alt="Air Temperature Icon" />
              <p>{`${response.airTemp}°F`}</p>
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
      )}
    </StyledBanner>
  );
};

// prop types
Banner.propTypes = {
  spot: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
};
