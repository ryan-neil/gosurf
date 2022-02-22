import styled from 'styled-components';

export const HomeStyled = styled.main`
	/* some styles */
`;

export const HeroImageStyled = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	/* Hero Image */
	/* background-color: rgba(27, 38, 53, 0.5); /* to be removed */
	background-image: ${({ theme }) => theme.styles.heroImage};
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	z-index: -1;
`;
