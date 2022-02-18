import styled from 'styled-components';

export const StyledChartContainer = styled.div`
	/* some styles... */
`;
export const StyledChartHeading = styled.p`
	font-size: ${({ theme }) => theme.styles.textXs};
`;
export const StyledChart = styled.div`
	width: 100%;
	min-height: 200px;
	padding: 0.5rem;
	background-color: ${({ theme }) => theme.colors.primaryBG};
	border-radius: ${({ theme }) => theme.styles.borderRadiusMd};
`;
