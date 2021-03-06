import PropTypes from 'prop-types';
// Components
import Logo from '../Logo';
import SearchWidget from './components/SearchWidget';
import ThemeToggle from './components/ThemeToggle';
import ProfileWidget from './components/ProfileWidget';
// Styles
import { StyledHeader, StyledNav } from './Header.styled';
import { Container, Flex } from '../../styles/Utils.styled';

const Header = ({ theme, setTheme }) => {
  return (
    <StyledHeader>
      <Container>
        <StyledNav>
          <Logo header />
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

// prop types
Header.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Header;
