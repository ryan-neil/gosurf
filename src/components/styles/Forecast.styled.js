import styled, { css } from 'styled-components';

export const StyledForecast = styled.main`
	width: 100%;
	height: auto;
	padding-bottom: 1rem;
`;

export const StyledGridContainer = styled.div`
	margin-top: 1rem;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-gap: 1rem;
	/* Responsive Queries */
	@media (max-width: ${({ theme }) => theme.mobile.width}) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const StyledGridItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1rem;
	background: ${({ theme }) => theme.colors.secondaryBG};
	min-height: 300px;
	height: auto;
	padding: 1rem;
	border-radius: ${({ theme }) => theme.styles.borderRadiusMd};
	h3 {
		font-size: ${({ theme }) => theme.styles.textMd};
	}
	img {
		width: 2rem;
	}
`;

export const StyledGridItemBody = styled.div`
	margin: 1rem 0;
	display: flex;
	flex-direction: column;
	gap: 0;
	.primary-data {
		color: ${({ theme }) => theme.colors.heading};
		font-size: ${({ theme }) => theme.styles.textXl};
	}
	${(props) =>
		props.tide &&
		css`
			gap: 0.5rem;
		`};
	${(props) =>
		props.swell &&
		css`
			flex-direction: row;
			justify-content: space-between;
		`};
`;

export const StyledGridItemChart = styled.div`
	width: 100%;
	min-height: 200px;
	background-color: ${({ theme }) => theme.colors.primaryBG};
	border-radius: ${({ theme }) => theme.styles.borderRadiusMd};
`;

export const StyledSwellTag = styled.span`
	width: 1rem;
	height: 1rem;
	border-radius: ${({ theme }) => theme.styles.borderRadiusSm};
	margin-top: 0.25rem;
	${(props) =>
		props.primary &&
		css`
			background-color: ${({ theme }) => theme.colors.green};
		`};
	${(props) =>
		props.secondary &&
		css`
			background-color: ${({ theme }) => theme.colors.tertiary};
		`};
`;
