import { useParams } from 'react-router-dom';
// helpers
import mockData from '../../mocks/spotsMockData.json';
// import { useFetch } from '../../hooks/useFetch';
// Components
import { Heading } from './components/Heading';
import { Banner } from './components/Banner';
import { Wave } from './components/Wave/Wave';
import { Tides } from './components/Tides/Tides';
import { Wind } from './components/Wind/Wind';
import { Swell } from './components/Swell/Swell';
// import { ForecastLoading } from './components/ForecastLoading';
import { Loading } from '../../components/Loading';
import { FetchError } from '../../components/FetchError';
import { SpotError } from '../../components/SpotError';
// Styles
import {
  StyledForecast,
  StyledForecastLoading,
  StyledGridContainer,
  StyledHeaderBackground,
} from './Forecast.styled';
import { Container } from '../../styles/Utils.styled';

export const Forecast = () => {
  // get param value
  const { slug } = useParams();
  // fetch spots api
  // const { response, loading, error } = useFetch('/api/spots');
  // mock data
  const response = mockData;
  const loading = false;
  const error = false;

  /**
   * Show loading state for entire page
   */
  if (loading)
    return (
      <>
        <StyledHeaderBackground />
        <Container>
          <StyledForecastLoading>
            <Loading />
          </StyledForecastLoading>
        </Container>
      </>
    );
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
  const spot = response.filter((item) => item.slug === slug);

  // check if parameter spot is valid
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
