import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
// Global Styles
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global.styled';
import { mode } from './components/styles/Theme.styled';
// Components
import Header from './components/Header';
// Pages
import Home from './pages/Home';
import Forecast from './pages/Forecast';
import Missing from './pages/Missing';

function App() {
	const [ theme, setTheme ] = useState('light');

	const API_URL = 'http://localhost:9001/spots'; // mock json-server api
	const [ spots, setSpots ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);

	// fetch surf spots from db
	useEffect(() => {
		const fetchSpots = async () => {
			setIsLoading(true);
			try {
				const res = await fetch(API_URL);
				const data = await res.json();

				// save data to local storage and set spots state
				localStorage.setItem('spotsData', JSON.stringify(data));
				// get local spots data
				const localSpotsData = JSON.parse(
					localStorage.getItem('spotsData')
				);

				// update state with local spots data
				setSpots(localSpotsData);
			} catch (err) {
				console.log(err);
			} finally {
				setIsLoading(false);
			}
		};
		fetchSpots();
	}, []);

	return (
		<ThemeProvider theme={mode[theme]}>
			<GlobalStyles />
			<Router>
				<div className="App">
					<Header theme={theme} setTheme={setTheme} spots={spots} />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/forecast/:slug"
							element={<Forecast isLoading={isLoading} />}
						/>
						<Route path="*" element={<Missing />} />
					</Routes>
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
