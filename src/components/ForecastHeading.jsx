import styled from 'styled-components';

const StyledForecastHeading = styled.div`
	margin-top: 1rem;
	h2 {
		font-size: ${({ theme }) => theme.styles.textLg};
		font-weight: 500;
	}
`;

const ForecastHeading = ({ spot }) => {
	return (
		<StyledForecastHeading>
			<h2>{`${spot.name}, ${spot.location.county}, ${spot.location.state}`}</h2>
		</StyledForecastHeading>
	);
};

export default ForecastHeading;
