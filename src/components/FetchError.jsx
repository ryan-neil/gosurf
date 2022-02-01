import styled from 'styled-components';
const StyledError = styled.div`
	p {
		color: ${({ theme }) => theme.colors.danger};
	}
`;

const FetchError = ({ fetchError }) => {
	return (
		<StyledError>
			<p>{fetchError}</p>
		</StyledError>
	);
};

export default FetchError;
