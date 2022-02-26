import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import SpotsContext from '../../context/SpotsContext';
// Components
import ForecastHeading from './components/ForecastHeading/ForecastHeading';
import Banner from './components/Banner/Banner';
import Wave from './components/Wave/Wave';
import Tides from './components/Tides/Tides';
import Wind from './components/Wind/Wind';
import Swell from './components/Swell/Swell';
import FetchError from '../../components/FetchError/FetchError';
// Styles
import { StyledForecast, StyledGridContainer, StyledHeaderBackground } from './Forecast.styled';
import { Container } from '../../styles/Utils.styled';

const Forecast = () => {
  const { spots } = useContext(SpotsContext);
  const { slug } = useParams();

  const filteredSpot = spots.filter((spot) => spot.slug === slug);
  const spot = filteredSpot[0];

  /**
   * FEAT: fetch all spots data, do some logic on the data and push into spot API object
   *
   * This object (mini api) would then be passed to the individual components to be rendered
   * Separate the fetching and logic from the rendering
   */
  const spotApi = {
    wave: {
      name: 'Wave Height',
      min: 2,
      max: 3,
      hourly: {
        values: [2, 2, 2, 3, 3, 3], // ...etc
        times: ['5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM'] // ...etc
      }
    },
    tides: {
      name: 'Tides',
      current: [
        {
          time: '3:26 PM',
          value: 0.01,
          type: 'Low'
        },
        {
          time: '11:46 PM',
          value: 2.26,
          type: 'High'
        }
      ],
      hourly: {
        values: [1.885, 1.706, 1.498, 1.296, 1.142, 1.065], // ...etc
        times: ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM'] // ...etc
      }
    },
    wind: {
      name: 'Wind',
      current: {
        degree: 182.0,
        direction: 'S',
        speed: 2.33,
        time: '9:06 AM'
      },
      hourly: {
        degrees: [252.0, 237.0, 169.0, 201.0, 191.0, 189.0], // ...etc
        directions: ['WSW', 'WSW', 'S', 'SSW', 'S', 'S'], // ...etc
        speeds: [2.33, 2.33, 5.64, 3.11, 2.53, 2.72], // ...etc
        times: ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM'] // ...etc
      }
    },
    swell: {
      name: 'Swell',
      hourly: {
        primary: {
          directions: [153.39, 98.96, 44.53, 350.1, 340.13, 330.15], // ...etc
          heights: [0.13, 0.17, 0.22, 0.26, 0.36, 0.45], // ...etc
          periods: [13.57, 13.67, 13.78, 13.88, 14, 14.12] // ...etc
        },
        secondary: {
          directions: [349.76, 341.99, 334.22, 326.45, 329.13, 331.8], // ...etc
          heights: [0.19, 0.24, 0.29, 0.34, 0.46, 0.58], // ...etc
          periods: [14.82, 14.92, 15.03, 15.13, 13.74, 12.35] // ...etc
        },
        times: ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM'] // ...etc
      }
    }
  };

  return (
    <StyledForecast>
      <StyledHeaderBackground />
      {spots ? (
        <Container>
          <ForecastHeading spot={spot} />
          <Banner spot={spot} />
          <StyledGridContainer>
            <Wave spot={spot} />
            <Tides spot={spot} />
            <Wind spot={spot} />
            <Swell spot={spot} />
          </StyledGridContainer>
        </Container>
      ) : (
        <Container>
          <FetchError name="Server" />
        </Container>
      )}
    </StyledForecast>
  );
};

export default Forecast;
