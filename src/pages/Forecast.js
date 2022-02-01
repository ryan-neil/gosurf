import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import SpotsContext from '../context/SpotsContext';
// hooks
import { useFetch } from '../hooks/useFetch';
// components
import ForecastHeader from '../components/ForecastHeader';
import Banner from '../components/Banner';
import Loading from '../components/Loading';
import FetchError from '../components/FetchError';
// styles
import { Container } from '../components/styles/Utils.styled';

const Forecast = () => {
	const { spots } = useContext(SpotsContext);
	const { slug } = useParams();

	const filteredSpot = spots.filter((spot) => spot.slug === slug);
	const surfSpot = filteredSpot[0];

	// fetch weather data
	const { data, isLoading, fetchError } = useFetch(
		`http://api.openweathermap.org/data/2.5/onecall?lat=${surfSpot.lat}&lon=${surfSpot.lon}&exclude=hourly,daily&units=imperial&appid=${process
			.env.REACT_APP_OW_KEY}`
	);

	return (
		<main>
			<div className="header-background" />
			<Container>
				{isLoading && <Loading />}
				{!isLoading &&
				!fetchError && (
					<div>
						<ForecastHeader surfSpot={surfSpot} />
						<Banner data={data} fetchError={fetchError} />
					</div>
				)}
				{!isLoading &&
				fetchError && <FetchError fetchError={fetchError} />}
			</Container>
		</main>
	);
};

export default Forecast;
