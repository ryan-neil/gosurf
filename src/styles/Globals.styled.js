import { createGlobalStyle } from 'styled-components';

/*
=================================
App styles
*/
const GlobalsStyled = createGlobalStyle`
	:root {
		--primaryBG: ${({ theme }) => theme.colors.primaryBG};
		--chartBar: ${({ theme }) => theme.colors.chartBar};
		--chartBarBorder: ${({ theme }) => theme.colors.chartBarBorder};
		--chartPrimSwellLine: ${({ theme }) => theme.colors.chartPrimSwellLine};
		--chartSecSwellLine: ${({ theme }) => theme.colors.chartSecSwellLine};
		--chartTicks: ${({ theme }) => theme.colors.chartTicks};
		--chartGrid: ${({ theme }) => theme.colors.chartGrid};
	}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html,
  body {
    height: 100%;
    font-family: 'Ubuntu', -apple-system, sans-serif;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
		// scrollbar styles
		-ms-overflow-style: none; // IE and Edge
  	scrollbar-width: none; // Firefox
  &::-webkit-scrollbar {
    display: none; // Chrome, Safari and Opera
  }
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
	button::-moz-focus-inner,
	input::-moz-focus-inner {
		border: 0;
		padding: 0;
	}
	// button reset
	button {
		all: initial;
	}
  a {
    text-decoration: none;
		color: ${({ theme }) => theme.colors.paragraph};
  }
  p {
    font-weight: 400;
    overflow-wrap: break-word;
    color: ${({ theme }) => theme.colors.paragraph};
		font-size: ${({ theme }) => theme.styles.textReg};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
		font-weight: 400;
    overflow-wrap: break-word;
    color: ${({ theme }) => theme.colors.heading};
		font-size: ${({ theme }) => theme.styles.textReg};
  }
  #root,
  #__next {
    isolation: isolate;
		width: 100%;
  }
`;

export default GlobalsStyled;
