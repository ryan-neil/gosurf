// Components
import Logo from './components/Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import SearchWidget from './components/SearchWidget/SearchWidget';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import ProfileWidget from './components/ProfileWidget/ProfileWidget';
// Styles
import { StyledHeader, StyledNav } from './Header.styled';
import { Container, Flex } from '../../styles/Utils.styled';

const Header = ({ theme, setTheme }) => {
	return (
		<StyledHeader>
			<Container>
				<StyledNav>
					<Logo />
					<SearchBar />
					{/* Widgets */}
					<Flex gapSm>
						<SearchWidget />
						<ThemeToggle theme={theme} setTheme={setTheme} />
						<ProfileWidget />
					</Flex>
				</StyledNav>
			</Container>
		</StyledHeader>
	);
};

export default Header;
