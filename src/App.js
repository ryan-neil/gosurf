import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocalStorage } from './hooks/useLocalStorage';
// Global Styles
import { ThemeProvider } from 'styled-components';
import { StyledApp } from './styles/App.styled';
import GlobalStyles from './styles/Global.styled';
import { mode } from './styles/Theme.styled';
// Global context
import { SpotsDataProvider } from './context/SpotsContext';
// ComponentsStyledApp
import Header from './components/Header/Header';
// Views
import Home from './views/Home/Home';
import Forecast from './views/Forecast/Forecast';
import Missing from './views/Missing/Missing';

const App = () => {
	const [theme, setTheme] = useLocalStorage('theme', 'light');

	return (
		<ThemeProvider theme={mode[theme]}>
			<GlobalStyles />
			<SpotsDataProvider>
				<Router>
					<StyledApp>
						<Header theme={theme} setTheme={setTheme} />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/forecast/:slug" element={<Forecast />} />
							<Route path="*" element={<Missing />} />
						</Routes>
					</StyledApp>
				</Router>
			</SpotsDataProvider>
		</ThemeProvider>
	);
};

export default App;
