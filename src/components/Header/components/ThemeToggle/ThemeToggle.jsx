// Styles
import { SunIcon, MoonIcon } from './ThemeToggle.styled';

export const ThemeToggle = ({ theme, setTheme }) => {
  const handleClick = () => {
    return theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const themeIcon =
    theme === 'light' ? <MoonIcon onClick={handleClick} /> : <SunIcon onClick={handleClick} />;

  return <span>{themeIcon}</span>;
};
