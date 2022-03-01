import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import SpotsContext from '../../context/SpotsContext';
// Components
import Heading from './components/Heading/Heading';
import Banner from './components/Banner/Banner';
import Wave from './components/Wave/Wave';
import Tides from './components/Tides/Tides';
import Wind from './components/Wind/Wind';
import Swell from './components/Swell/Swell';
import Loading from '../../components/Loading/Loading';
import FetchError from '../../components/FetchError/FetchError';
import SpotError from '../../components/SpotError/SpotError';
// Styles
import { StyledForecast, StyledGridContainer, StyledHeaderBackground } from './Forecast.styled';
import { Container } from '../../styles/Utils.styled';

const Forecast = () => {
  // get param value
  const { slug } = useParams();
  // fetch spots API data
  const { response, loading, error } = useContext(SpotsContext);

  // render loading until response from api (this must come before the filtering logic)
  if (loading) {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }

  // if error render error (this must come before the filtering logic)
  if (error) {
    return (
      <Container>
        <FetchError name="Forecast" />
      </Container>
    );
  }

  // filter for param spot
  const spot = response.filter((item) => item.slug === slug);

  // check if parameter spot is valid
  if (spot.length === 0) {
    return (
      <Container>
        <SpotError />
      </Container>
    );
  }

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
