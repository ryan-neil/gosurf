import { useParams } from 'react-router-dom';
// hooks
import { useFetch } from '../hooks/useFetch';
// components
import Banner from '../components/Banner';
import Loading from '../components/Loading';
// styles
import { Container } from '../components/styles/Utils.styled';

const Forecast = ({ spots }) => {
	const { slug } = useParams();

	const filteredSpot = spots.filter((spot) => spot.slug === slug);
	const surfSpot = filteredSpot[0];

	// fetch weather data
	const { data, isLoading } = useFetch(
		`http://api.openweathermap.org/data/2.5/onecall?lat=${surfSpot.lat}&lon=${surfSpot.lon}&exclude=hourly,daily&units=imperial&appid=${process
			.env.REACT_APP_OW_KEY}`
	);

	return (
		<main>
			<div className="header-background" />
			<Container>
				{!isLoading ? (
					<div>
						<div className="forecast-header">
							<h2>{`${surfSpot.name}, ${surfSpot.location
								.county}, ${surfSpot.location.state}`}</h2>
						</div>
						<Banner />
					</div>
				) : (
					<Loading />
				)}
			</Container>
		</main>
	);
};

export default Forecast;
