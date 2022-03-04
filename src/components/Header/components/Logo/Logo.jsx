import { Link } from 'react-router-dom';
// Styled
import { StyledLogo } from './Logo.styled';

export const Logo = () => {
  return (
    <StyledLogo>
      <Link to="/">
        <img src="../logo.svg" alt="gosurf logo" />
        <h1>GoSurf</h1>
        <p>Beta</p>
      </Link>
    </StyledLogo>
  );
};
