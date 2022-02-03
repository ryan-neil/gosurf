import styled from 'styled-components';
const StyledError = styled.div`
	p {
		color: ${({ theme }) => theme.colors.danger};
	}
`;

const FetchError = ({ error }) => {
	return (
		<StyledError>
			<p>Error fetching data.</p>
			{/* <p>Error fetching data. ({error})</p> */}
		</StyledError>
	);
};

export default FetchError;
