// styles
import {
	StyledHeader,
	StyledNav,
	StyledLogo,
	StyledSearchBar,
	InputSearchIcon,
	SearchIcon,
	SunIcon,
	MoonIcon
} from './styles/Header.styled';
import { Container, Flex } from './styles/Utils.styled';

const Header = ({ theme, setTheme }) => {
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
						<img src="./logo.svg" />
						<h1>GoSurf</h1>
						<p>Beta</p>
					</StyledLogo>
					{/* SearchBar */}
					<StyledSearchBar>
						<InputSearchIcon />
						<input type="text" placeholder="Search spot" />
					</StyledSearchBar>
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
