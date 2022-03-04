import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useLocalStorage } from './hooks/useLocalStorage';
// Global Styles
import { mode } from './styles/Theme.styled';
import GlobalStyles from './styles/Global.styled';
import { StyledApp } from './styles/App.styled';
// Global context
import { SpotsDataProvider } from './context/SpotsContext';
// Components
import { Header } from './components/Header';
// Views
import { Home } from './views/Home';
import { Forecast } from './views/Forecast';
import { Missing } from './views/Missing';

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <ThemeProvider theme={mode[theme]}>
      <GlobalStyles />
      <StyledApp>
        <SpotsDataProvider>
          <Header theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forecast/:slug" element={<Forecast />} />
            <Route path="*" element={<Missing />} />
          </Routes>
        </SpotsDataProvider>
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
