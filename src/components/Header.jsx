import { Link } from 'react-router-dom';
// components
import SearchBar from './SearchBar';
// styles
import {
	StyledHeader,
	StyledNav,
	StyledLogo,
	SearchIcon,
	SunIcon,
	MoonIcon
} from './styles/Header.styled';
import { Container, Flex } from './styles/Utils.styled';

const Header = ({ theme, setTheme, spots }) => {
	const toggleTheme = () => {
		return theme === 'light' ? setTheme('dark') : setTheme('light');
	};

	// set theme icon
	const themeIcon =
		theme === 'light' ? (
			<MoonIcon onClick={toggleTheme} />
		) : (
			<SunIcon onClick={toggleTheme} />
		);

	return (
		<StyledHeader>
			<Container>
				<StyledNav>
					{/* Logo */}
					<StyledLogo>
						<Link to="/">
							<img src="../logo.svg" alt="gosurf logo" />
							<h1>GoSurf</h1>
							<p>Beta</p>
						</Link>
					</StyledLogo>
					{/* SearchBar */}
					<SearchBar spots={spots} />
					{/* Widgets */}
					<Flex>
						<SearchIcon />
						{themeIcon}
					</Flex>
				</StyledNav>
			</Container>
		</StyledHeader>
	);
};

export default Header;
