import Hero from './components/Hero';
import About from './components/About';
// Styles
import { HomeStyled, BackgroundImageStyled } from './Home.styled';

const Home = () => {
  return (
    <HomeStyled>
      <BackgroundImageStyled />
      <Hero />
      <About />
    </HomeStyled>
  );
};

export default Home;
