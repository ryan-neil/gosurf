// Component
import FavoriteToggle from '../FavoriteToggle/FavoriteToggle';
// Styled
import { StyledHeading } from './Heading.styled';

const Heading = ({ spot }) => {
  return (
    <StyledHeading>
      <h2>{`${spot.name}, ${spot.location.county}, ${spot.location.state}`}</h2>
      <FavoriteToggle />
    </StyledHeading>
  );
};

export default Heading;
