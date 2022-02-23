import { Link } from 'react-router-dom';
// Components
import SearchBar from '../../components/SearchBar/SearchBar';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
// Styles
import { StyledHeader, StyledNav, StyledLogo, SearchIcon } from './Header.styled';
import { Container, Flex } from '../../styles/Utils.styled';

const Header = ({ theme, setTheme }) => {
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
					<SearchBar />
					{/* Widgets */}
					<Flex>
						<SearchIcon />
						<ThemeToggle theme={theme} setTheme={setTheme} />
					</Flex>
				</StyledNav>
			</Container>
		</StyledHeader>
	);
};

export default Header;
