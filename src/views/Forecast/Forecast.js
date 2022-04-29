import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
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
  const { isLoading, error, data } = useQuery('spots', () =>
    fetch('/api/spots').then((res) => res.json())
  );

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

  // filter for param spot
  const spot = data.filter((item) => item.slug === slug);

  // check if parameter spot is a valid location
  if (spot.length === 0) return <SpotError />;

  return (
    <StyledForecast>
      <StyledHeaderBackground />
      <Container>
        <Heading spot={spot[0]} />
        <Banner spot={spot[0]} />
        <StyledGridContainer>
          <Wave spot={spot[0]} />
          <Tides spot={spot[0]} />
          <Wind spot={spot[0]} />
          <Swell spot={spot[0]} />
        </StyledGridContainer>
      </Container>
    </StyledForecast>
  );
};

export default Forecast;
