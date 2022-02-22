// styles
import { HomeStyled, HeroImageStyled } from './Home.styled';
import { Container } from '../../styles/Utils.styled';

const Home = () => (
	<HomeStyled>
		<HeroImageStyled />
		<Container>
			<h2>Home page</h2>
		</Container>
	</HomeStyled>
);

export default Home;
