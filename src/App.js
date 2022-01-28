import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
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
	console.log('App render!');

	const [ theme, setTheme ] = useState('dark');
	const { data } = useFetch('http://localhost:9001/spots');
	const [ spots, setSpots ] = useLocalStorage('spots', data);
	const [ name, setName ] = useLocalStorage('name', 'Ryan');
	console.log(spots);

	// window.localStorage.setItem('spots', JSON.stringify(data)); // set ls
	// const localSpotsData = window.localStorage.getItem('spots'); // get ls
	// console.log(localSpotsData);

	return (
		<ThemeProvider theme={mode[theme]}>
			<GlobalStyles />
			<Router>
				<div className="App">
					<Header theme={theme} setTheme={setTheme} spots={spots} />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/forecast/:slug" element={<Forecast />} />
						<Route path="*" element={<Missing />} />
					</Routes>
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
