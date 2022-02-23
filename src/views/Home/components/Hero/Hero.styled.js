import styled from 'styled-components';

export const HeroStyled = styled.section`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	max-width: 500px;
	padding: 1.6rem 1rem;
	margin-top: 10rem;
	border-radius: ${({ theme }) => theme.styles.borderRadiusMd};
	background: ${({ theme }) => theme.colors.primaryBG};
	box-shadow: ${({ theme }) => theme.colors.boxShadow};
	h1 {
		font-size: ${({ theme }) => theme.styles.textXl};
		color: ${({ theme }) => theme.colors.heading};
		margin-bottom: 1rem;
	}
	h2 {
		font-size: ${({ theme }) => theme.styles.textMd};
		color: ${({ theme }) => theme.colors.paragraph};
		line-height: ${({ theme }) => theme.styles.lineHeightMd};
		margin-bottom: 2rem;
		.text-underline {
			display: inline-block;
			position: relative;
			z-index: 1;
		}
		.text-underline::after {
			content: '';
			position: absolute;
			bottom: -15px;
			left: 0;
			height: 15px;
			width: 100%;
			border: solid 2px ${({ theme }) => theme.colors.primary};
			border-color: ${({ theme }) => theme.colors.primary} transparent transparent
				transparent;
			border-radius: 50%;
		}
	}
	p {
		font-size: ${({ theme }) => theme.styles.textXs};
		color: ${({ theme }) => theme.colors.paragraphLight};
		margin-top: 0.5rem;
		margin-left: 1rem;
	}
`;
