import styled from 'styled-components';
const StyledError = styled.div`
	p {
		color: ${({ theme }) => theme.colors.danger};
	}
`;

const FetchError = ({ error }) => {
	return (
		<StyledError>
			<p>Oops: {error}</p>
		</StyledError>
	);
};

export default FetchError;
