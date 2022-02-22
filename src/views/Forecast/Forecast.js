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
import {
	StyledForecast,
	StyledGridContainer,
	StyledHeaderBackground,
} from './Forecast.styled';
import { Container } from '../../styles/Utils.styled';

const Forecast = () => {
	const { spots } = useContext(SpotsContext);
	const { slug } = useParams();

	const filteredSpot = spots.filter((spot) => spot.slug === slug);
	const spot = filteredSpot[0];

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
