import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import SpotsContext from '../context/SpotsContext';
// components
import ForecastHeader from '../components/ForecastHeader';
import Banner from '../components/Banner';
import Tides from '../components/Tides';
import Wind from '../components/Wind';
// styles
import { StyledForecast } from '../components/styles/Forecast.styled';
import { Container } from '../components/styles/Utils.styled';

const Forecast = () => {
	const { spots } = useContext(SpotsContext);
	const { slug } = useParams();

	const filteredSpot = spots.filter((spot) => spot.slug === slug);
	const spot = filteredSpot[0];

	return (
		<StyledForecast>
			<div className="header-background" />
			<Container>
				<ForecastHeader spot={spot} />
				<Banner spot={spot} />
				<div className="grid-container">
					<Tides spot={spot} />
					<Wind spot={spot} />
				</div>
			</Container>
		</StyledForecast>
	);
};

export default Forecast;
