import Hero from './components/Hero/Hero';
import About from './components/About/About';
// Styles
import { HomeStyled } from './Home.styled';
import { BackgroundImageStyled } from './Home.styled';

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
