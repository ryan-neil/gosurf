import { createGlobalStyle } from 'styled-components';

/*
=================================
App styles
*/
const GlobalStyles = createGlobalStyle`
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
    font-family: Ubuntu, -apple-system;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.colors.primaryBG};
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
  a {
    text-decoration: none;
  }
  p {
    overflow-wrap: break-word;
    color: ${({ theme }) => theme.colors.paragraph};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    color: ${({ theme }) => theme.colors.heading};
  }
  #root,
  #__next {
    isolation: isolate;
  }
`;

export default GlobalStyles;
