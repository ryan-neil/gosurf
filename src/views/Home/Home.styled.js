import styled from 'styled-components';

export const HomeStyled = styled.main`
	/* some styles */
`;

export const BackgroundImageStyled = styled.section`
	position: absolute;
	top: 0;
	width: 100%;
	height: 90vh;
	/* Hero Image */
	background-image: ${({ theme }) => theme.styles.heroImage};
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	z-index: -1;
`;
