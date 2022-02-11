import styled from 'styled-components';

const StyledError = styled.div`
	height: 100%;
	justify-items: flex-start;
	margin-top: 1rem;
	p {
		color: ${({ theme }) => theme.colors.danger};
	}
`;

const FetchError = ({ name, error }) => {
	return (
		<StyledError>
			<p>Oops, error fetching {name} data...</p>
			{/* <p>{error}</p> */}
		</StyledError>
	);
};

export default FetchError;
