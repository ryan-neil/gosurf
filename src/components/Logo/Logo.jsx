import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Styled
import { StyledLogo } from './Logo.styled';

export const Logo = ({ header, footer }) => {
  return (
    <StyledLogo header={header} footer={footer}>
      <Link to="/">
        <img src="../logo.svg" alt="gosurf logo" />
        <h1>GoSurf</h1>
        <p>Alpha</p>
      </Link>
    </StyledLogo>
  );
};

// prop types
Logo.propTypes = {
  header: PropTypes.bool,
  footer: PropTypes.bool,
};
