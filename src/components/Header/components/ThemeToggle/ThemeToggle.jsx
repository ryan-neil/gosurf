import PropTypes from 'prop-types';
// Styles
import { StyledSunIcon, StyledMoonIcon } from './ThemeToggle.styled';

export const ThemeToggle = ({ theme, setTheme }) => {
  // toggle theme status
  const handleClick = () => {
    return theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  // set theme icon
  // data test id is for testing
  const themeIcon =
    theme === 'light' ? (
      <span data-testid="moon-icon">
        <StyledMoonIcon />
      </span>
    ) : (
      <span data-testid="sun-icon">
        <StyledSunIcon />
      </span>
    );

  return (
    <button type="submit" onClick={handleClick}>
      {themeIcon}
    </button>
  );
};

// prop types
ThemeToggle.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};
