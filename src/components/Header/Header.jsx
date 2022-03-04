// Components
import { Logo } from './components/Logo';
import { SearchBar } from '../SearchBar';
import { SearchWidget } from './components/SearchWidget';
import { ThemeToggle } from './components/ThemeToggle';
import { ProfileWidget } from './components/ProfileWidget';
// Styles
import { StyledHeader, StyledNav } from './Header.styled';
import { Container, Flex } from '../../styles/Utils.styled';

export const Header = ({ theme, setTheme }) => {
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
