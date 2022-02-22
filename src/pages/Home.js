// styles
import { HomeStyled } from '../components/styles/Home.styled';
import { Container } from '../components/styles/Utils.styled';

const Home = () => (
	<HomeStyled>
		<div className="hero-background" />
		<Container>
			<h2>Home page</h2>
		</Container>
	</HomeStyled>
);

export default Home;
