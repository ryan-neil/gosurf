import { useParams } from 'react-router-dom';
// Context
import { useSpotsContextAPI } from '../../context/SpotsContext';
// Components
import { Heading } from './components/Heading';
import { Banner } from './components/Banner';
import Wave from './components/Wave';
import Tides from './components/Tides';
import Wind from './components/Wind';
import Swell from './components/Swell';
import { Loading } from '../../components/Loading';
import { FetchError } from '../../components/FetchError';
import { SpotError } from '../../components/SpotError';
// Styles
import { StyledForecast, StyledGridContainer, StyledHeaderBackground } from './Forecast.styled';
import { Container } from '../../styles/Utils.styled';

export const Forecast = () => {
  // get param value
  const { slug } = useParams();
  // fetch API from context
  const { response, loading, error } = useSpotsContextAPI();

  // maybe show spinner here (centered on page)
  if (loading) return <Loading />;
  if (error) return <FetchError name="Forecast" error={error} />;

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
