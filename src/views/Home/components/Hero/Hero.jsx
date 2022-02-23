// Components
import SearchBar from '../../../../components/SearchBar/SearchBar';
// Styles
import { HeroStyled } from './Hero.styled';

const Hero = () => {
	return (
		<HeroStyled>
			<h1>Check your spot</h1>
			<h2>
				Experience checking the surf without the noise and all the{' '}
				<span className="text-underline">enjoyment</span>.
			</h2>
			<SearchBar mobile />
			<p>try "pipeline"</p>
		</HeroStyled>
	);
};

export default Hero;
