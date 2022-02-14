import styled from 'styled-components';

export const StyledBanner = styled.section`
	min-height: 100px;
	height: auto;
	margin-top: 1rem;
	/* white-space: nowrap; */
	display: flex;
	justify-content: space-between;
	align-items: flex-start; /* flex items take contents width */
	gap: 1.5rem;
	background-color: ${({ theme }) => theme.colors.secondaryBG};
	padding: 1rem;
	border-radius: ${({ theme }) => theme.styles.borderRadiusMd};
	overflow-x: scroll;
`;

export const StyledBannerItem = styled.div`
	height: auto;
	min-width: 200px;
	h4 {
		padding-bottom: 0.25rem;
		margin-bottom: 0.5rem;
		border-bottom: 1px solid ${({ theme }) => theme.colors.border};
	}
	img {
		width: 1.6rem;
	}
`;
