import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SpotsContext from '../context/SpotsContext';
// Components
import ForecastHeader from '../components/ForecastHeader';
import Banner from '../components/Banner';
import Wave from '../components/Wave';
import Tides from '../components/Tides';
import Wind from '../components/Wind';
import Swell from '../components/Swell';
// Styles
import { StyledForecast, StyledGridContainer } from '../components/styles/Forecast.styled';
import { Container } from '../components/styles/Utils.styled';

const Forecast = () => {
	const { spots } = useContext(SpotsContext);
	const { slug } = useParams();
	const navigate = useNavigate();

	const filteredSpot = spots.filter((spot) => spot.slug === slug);
	const spot = filteredSpot[0];

	// error check: not working...
	if (spot === undefined) {
		navigate('*'); // 404
	}

	return (
		<StyledForecast>
			<div className="header-background" />
			<Container>
				<ForecastHeader spot={spot} />
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
