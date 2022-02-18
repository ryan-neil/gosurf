import styled from 'styled-components';

const StyledError = styled.div`
	display: flex;
	height: 100%;
	margin-top: 1rem;
	p {
		align-self: flex-start; /* flex-start makes the width = auto */
		color: ${({ theme }) => theme.colors.danger};
		background-color: ${({ theme }) => theme.colors.dangerLight};
		padding: 0.5rem;
		border-radius: ${({ theme }) => theme.styles.borderRadiusMd};
	}
`;

const FetchError = ({ name, error }) => {
	return (
		<StyledError>
			<p>
				Sorry, error fetching {name} data...{error}
			</p>
		</StyledError>
	);
};

export default FetchError;
