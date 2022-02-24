// Components
import SearchBar from '../../../../components/SearchBar/SearchBar';
// Styles
import { HeroStyled, HeroContentStyled } from './Hero.styled';
import { Container } from '../../../../styles/Utils.styled';

const Hero = () => {
	return (
		<HeroStyled>
			<HeroContentStyled>
				<h1>Check your spot</h1>
				<h2>
					Experience checking the surf without the noise and all the{' '}
					<span className="text-underline">enjoyment</span>.
				</h2>
				<SearchBar mobile />
				<p>try "pipeline"</p>
			</HeroContentStyled>
		</HeroStyled>
	);
};

export default Hero;
