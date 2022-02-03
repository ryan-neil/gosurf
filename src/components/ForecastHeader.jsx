import styled from 'styled-components';
const StyledForecastHeader = styled.div`
	margin-top: 1rem;
	/*  */
`;

const ForecastHeader = ({ spot }) => {
	return (
		<StyledForecastHeader>
			<h2>{`${spot.name}, ${spot.location.county}, ${spot.location
				.state}`}</h2>
		</StyledForecastHeader>
	);
};

export default ForecastHeader;
