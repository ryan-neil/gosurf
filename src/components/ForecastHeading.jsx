// Component
import FavoriteToggle from './FavoriteToggle';
// Styles
import styled from 'styled-components';
const StyledForecastHeading = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1rem;
	h2 {
		font-size: ${({ theme }) => theme.styles.textLg};
		color: ${({ theme }) => theme.colors.white};
		font-weight: 500;
	}
`;

const ForecastHeading = ({ spot }) => {
	const Heading = () => {
		return (
			<h2>{`${spot.name}, ${spot.location.county}, ${spot.location.state}`}</h2>
		);
	};

	return (
		<StyledForecastHeading>
			<Heading />
			<FavoriteToggle />
		</StyledForecastHeading>
	);
};

export default ForecastHeading;
