import { Hero } from './components/Hero';
import { About } from './components/About';
// Styles
import { HomeStyled, BackgroundImageStyled } from './Home.styled';

export const Home = () => {
  return (
    <HomeStyled>
      <BackgroundImageStyled />
      <Hero />
      <About />
    </HomeStyled>
  );
};
