import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Styled
import { StyledLogo } from './Logo.styled';

const Logo = ({ header, footer }) => {
  return (
    <StyledLogo header={header} footer={footer}>
      <Link to="/">
        <img src="../logo.svg" alt="gosurf logo" />
        <h1>GoSurf</h1>
        <p>Beta</p>
      </Link>
    </StyledLogo>
  );
};

// prop types
Logo.propTypes = {
  header: PropTypes.bool,
  footer: PropTypes.bool,
};

export default Logo;
