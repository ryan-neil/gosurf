// styles
import { HomeStyled, HeroImageStyled } from '../components/styles/Home.styled';
import { Container } from '../components/styles/Utils.styled';

const Home = () => (
	<HomeStyled>
		<HeroImageStyled />
		<Container>
			<h2>Home page</h2>
		</Container>
	</HomeStyled>
);

export default Home;
