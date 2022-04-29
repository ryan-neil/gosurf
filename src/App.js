import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useLocalStorage } from './hooks/useLocalStorage';
// global styles
import { themeMode } from './styles/Theme.styled';
import GlobalsStyled from './styles/Globals.styled';
import { StyledApp } from './styles/App.styled';
// components
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
// views
import Home from './views/Home';
import Forecast from './views/Forecast';
import Search from './views/Search';
import Missing from './views/Missing';

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <ThemeProvider theme={themeMode[theme]}>
      <GlobalsStyled />
      <ErrorBoundary>
        <StyledApp>
          <Header theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forecast/:slug" element={<Forecast />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<Missing />} />
          </Routes>
          <Footer />
        </StyledApp>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
