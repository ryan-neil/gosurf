/**
 * OpenWeather API Info:
 * API_KEY = '3a376daf7ce64b0cc673839620a5e520'
 * API_URL = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&units=imperial&appid=${OW_API_KEY}`
 * Response = await fetch(urlOpenWeather, { method: 'GET' })
 */

import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// context
import SpotsContext from '../context/SpotsContext';
// components
import Banner from '../components/Banner';
import Loading from '../components/Loading';
// styles
import { Container } from '../components/styles/Utils.styled';

const Forecast = () => {
	const { isLoading } = useContext(SpotsContext);
	const [ weatherData, setWeatherData ] = useState([]);
	const { slug } = useParams();
	let navigate = useNavigate();

	// grab the spots data from local storage
	const localSpotsData = JSON.parse(localStorage.getItem('spotsData')); // BUG: potential bug where user visits Forecast page for the first time and doesn't have locally saved data from the Home page
	// return the object (spot) that matches the value of the params coming in
	const filteredSpot = localSpotsData.filter((spot) => spot.slug === slug);
	const surfSpot = filteredSpot[0];

	// check if url param matches any spots in the database
	// BUG: Not working...
	if (!surfSpot) navigate('/');

	// fetch openweather data
	useEffect(
		() => {
			const fetchWeatherData = async () => {
				const API_KEY = '3a376daf7ce64b0cc673839620a5e520';
				const API_URL = `http://api.openweathermap.org/data/2.5/onecall?lat=${surfSpot.lat}&lon=${surfSpot.lon}&exclude=hourly,daily&units=imperial&appid=${API_KEY}`;

				try {
					const res = await fetch(API_URL);
					const data = await res.json();

					// BUG: on second reload data is not populated (empty array)
					// work-around is to save to local storage, like with spots

					setWeatherData(data);
				} catch (err) {
					console.log(err);
				}
			};
			fetchWeatherData();
		},
		[ surfSpot.lat, surfSpot.lon ]
	);

	return (
		<main>
			<div className="header-background" />
			<Container>
				{!isLoading ? (
					<div className="forecast-header">
						<h2>{`${surfSpot.name}, ${surfSpot.location
							.county}, ${surfSpot.location.state}`}</h2>
						<h3>Forecast</h3>
						<p>Today</p>
					</div>
				) : (
					<Loading />
				)}
				<Banner weatherData={weatherData} />
			</Container>
		</main>
	);
};

export default Forecast;
