// Styles
import styled from 'styled-components';

export const StyledForecastHeading = styled.div`
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
