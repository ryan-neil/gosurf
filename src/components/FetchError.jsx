import styled from 'styled-components';
import { ErrorOutline } from '@styled-icons/material';

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
const ErrorIcon = styled(ErrorOutline)`
	color: ${({ theme }) => theme.colors.danger};
	width: 1.4rem;
	margin-right: 0.5rem;
`;

// Sorry, error fetching {name} data...{error}

const FetchError = ({ name, error }) => {
	return (
		<StyledError>
			<p>
				<ErrorIcon />
				Sorry, please try again later.
			</p>
		</StyledError>
	);
};

export default FetchError;
