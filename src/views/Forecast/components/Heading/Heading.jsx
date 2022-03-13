import PropTypes from 'prop-types';
// Component
import { FavoriteToggle } from '../FavoriteToggle';
// Styled
import { StyledHeading } from './Heading.styled';

export const Heading = ({ spot }) => {
  return (
    <StyledHeading>
      <h2>{`${spot.name}, ${spot.location.county}, ${spot.location.state}`}</h2>
      <FavoriteToggle />
    </StyledHeading>
  );
};

// prop types
Heading.propTypes = {
  spot: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
};
