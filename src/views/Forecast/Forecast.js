import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
// api
import * as api from '../../services/spotApi';
// components
import Heading from './components/Heading';
import Banner from './components/Banner';
import Wave from './components/Wave/Wave';
import Tides from './components/Tides/Tides';
import Wind from './components/Wind/Wind';
import Swell from './components/Swell/Swell';
import FetchLoading from '../../components/FetchLoading';
import FetchError from '../../components/FetchError';
import SpotError from '../../components/SpotError';
// styles
import {
  StyledForecast,
  StyledForecastLoading,
  StyledGridContainer,
  StyledHeaderBackground,
} from './Forecast.styled';
import { Container } from '../../styles/Utils.styled';

const Forecast = () => {
  const { slug } = useParams(); // get param value
  // fetch spots API from react query
  const { isLoading, error, data: spot } = useQuery('spotsData', () => api.getSpot(slug));

  /**
   * Show loading state for entire page
   */
  if (isLoading)
    return (
      <>
        <StyledHeaderBackground />
        <Container>
          <StyledForecastLoading>
            <FetchLoading />
          </StyledForecastLoading>
        </Container>
      </>
    );

  /**
   * Show error state for entire page
   */
  if (error)
    return (
      <>
        <StyledHeaderBackground />
        <Container>
          <StyledForecastLoading>
            <FetchError name="Forecast" error={error} />
          </StyledForecastLoading>
        </Container>
      </>
    );

  // get spot passed into the parameters
  // const foundSpot = api.getSpot(slug);
  // check if spot is a valid location
  if (!spot) return <SpotError />;

  return (
    <StyledForecast>
      <StyledHeaderBackground />
      <Container>
        <Heading spot={spot} />
        <Banner spot={spot} />
        <StyledGridContainer>
          <Wave spot={spot} />
          <Tides spot={spot} />
          <Wind spot={spot} />
          <Swell spot={spot} />
        </StyledGridContainer>
      </Container>
    </StyledForecast>
  );
};

export default Forecast;
