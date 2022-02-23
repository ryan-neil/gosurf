import Hero from './components/Hero/Hero';
import About from './components/About/About';
// Styles
import { HomeStyled } from './Home.styled';
import { BackgroundImageStyled } from './Home.styled';
import { Container } from '../../styles/Utils.styled';

const Home = () => {
	return (
		<HomeStyled>
			<BackgroundImageStyled />
			<Container>
				<Hero />
			</Container>
			<About />
		</HomeStyled>
	);
};

export default Home;
