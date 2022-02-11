import styled from 'styled-components';

export const StyledBanner = styled.section`
	min-height: 100px;
	height: auto;
	margin-top: 1rem;
	display: flex;
	justify-content: space-between;
	gap: 1.4rem;
	min-width: 100%;
	background-color: ${({ theme }) => theme.colors.secondaryBG};
	padding: 1rem;
	border-radius: ${({ theme }) => theme.styles.borderRadiusMd};
	overflow-x: scroll;
	.banner-item {
		height: auto;
		min-width: 200px;
		h4 {
			margin-bottom: 0.5rem;
		}
		img {
			width: 1.6rem;
		}
	}
`;
