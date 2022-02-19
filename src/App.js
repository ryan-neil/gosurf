import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Global Styles
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global.styled';
import { mode } from './components/styles/Theme.styled';
import { SpotsDataProvider } from './context/SpotsContext';
// Components
import Header from './components/Header';
// Pages
import Home from './pages/Home';
import Forecast from './pages/Forecast';
import Missing from './pages/Missing';

const App = () => {
	const [theme, setTheme] = useState('dark');

	return (
		<ThemeProvider theme={mode[theme]}>
			<GlobalStyles />
			<SpotsDataProvider>
				<Router>
					<div className="App">
						<Header theme={theme} setTheme={setTheme} />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/forecast/:slug" element={<Forecast />} />
							<Route path="*" element={<Missing />} />
						</Routes>
					</div>
				</Router>
			</SpotsDataProvider>
		</ThemeProvider>
	);
};

export default App;
