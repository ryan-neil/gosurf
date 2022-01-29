import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useFetch } from './hooks/useFetch';
import { useLocalStorage } from './hooks/useLocalStorage';
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
	const [ theme, setTheme ] = useState('dark');
	const { data } = useFetch('http://localhost:9001/spots');
	const [ spots, setSpots ] = useLocalStorage('spots', data);

	// check if local spots data exists before setting spots state
	useEffect(
		() => {
			if (data) {
				setSpots(data);
			}
		},
		[ data ]
	);

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
							element={<Forecast spots={spots} />}
						/>
						<Route path="*" element={<Missing />} />
					</Routes>
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
