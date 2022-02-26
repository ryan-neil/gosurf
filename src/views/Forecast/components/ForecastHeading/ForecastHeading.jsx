// Component
import FavoriteToggle from '../FavoriteToggle/FavoriteToggle';
// Styled
import { StyledForecastHeading } from './ForecastHeading.styled';

const ForecastHeading = ({ spot }) => {
  return (
    <StyledForecastHeading>
      <h2>{`${spot.name}, ${spot.location.county}, ${spot.location.state}`}</h2>
      <FavoriteToggle />
    </StyledForecastHeading>
  );
};

export default ForecastHeading;
