// root theme styles
// https://blog.agney.dev/theming-on-styled-components/

const LightTheme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    primary: '#19A0F6',
    primaryLight: 'rgba(25, 160, 246, 0.1)',
    secondary: '#1a2634',
    primaryBG: '#ffffff',
    secondaryBG: 'hsl(217, 45%, 97%)',
    headerBG: '#192432',
    heading: '#1b2635',
    paragraph: 'rgba(27, 38, 53, 0.7)',
    paragraphLight: 'rgba(27, 38, 53, 0.6)',
    paragraphSupaLight: 'rgba(27, 38, 53, 0.1)',
    border: 'rgba(0, 0, 0, 0.1)',
    headerBorder: 'rgba(255, 255, 255, 0.1)',
    inputBorder: 'rgba(0, 0, 0, 0.05)',
    inputBG: 'hsl(217, 45%, 97%)',
    boxShadow: '0px 2px 4px 0px rgba(14, 30, 37, 0.12)',
    hover: '#233044',
    // misc
    tertiary: 'rgba(255, 173, 66, 1)',
    tertiaryLight: 'rgba(255, 173, 66, 0.2)',
    danger: '#fa3945',
    dangerLight: 'rgba(250, 57, 69, 0.1)',
    success: 'rgba(63, 185, 80, 1)',
    successLight: 'rgba(63, 185, 80, 0.1)',
    green: '#3fb950',
    orange: '#f0883e',
    red: '#da3633',
    pink: '#d961a1',
    violet: '#8957e5',
    blue: '#378afc',
    // charts
    chartBar: 'rgba(25, 160, 246, 0.6)',
    chartBarBorder: 'rgba(25, 160, 246, 1)',
    chartTicks: 'rgba(0, 0, 0, 0.6)',
    chartGrid: 'rgba(0, 0, 0, 0.2)',
    chartPrimSwellLine: 'rgba(63, 185, 80, 1)',
    chartSecSwellLine: 'rgba(255, 173, 66, 1)'
  },
  styles: {
    textXs: '11px',
    textSm: '14px',
    textReg: '16px',
    textMd: '22px',
    textLg: '26px',
    textXl: '32px',
    lineHeightSm: '28px',
    lineHeightMd: '32px',
    transition: 'ease .2s',
    borderRadiusSm: '0.25rem',
    borderRadiusMd: '0.35rem',
    boxShadow: '0 2px 4px 0 hsla(198, 45%, 10%, .12)',
    boxShadowInset: 'inset 0 1px 4px 0 rgba(0,0,0,0.05);',
    heroImage: `url('./images/encinitas.webp')`,
    // heroImage: `url('./images/boards.webp')`,
    aboutImage: `url('./images/topo-light.svg')`
  },
  web: {
    width: '1280px'
  },
  mobile: {
    width: '718px' // split screen
    // width: '720px',
  }
};

const DarkTheme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    primary: '#19A0F6',
    primaryLight: 'rgba(25, 160, 246, 0.1)',
    secondary: '#1a2634',
    primaryBG: '#1b2635',
    secondaryBG: '#233044',
    headerBG: '#151E2B',
    heading: '#ffffff',
    paragraph: 'rgba(255, 255, 255, 0.7)',
    paragraphLight: 'rgba(255, 255, 255, 0.6)',
    paragraphSupaLight: 'rgba(255, 255, 255, 0.1)',
    border: 'rgba(255, 255, 255, 0.1)',
    headerBorder: 'rgba(255, 255, 255, 0.1)',
    inputBorder: 'rgba(255, 255, 255, 0.05)',
    inputBG: '#233044',
    hover: '#233044',
    // misc
    tertiary: '#ffad42',
    tertiaryLight: 'rgba(255, 173, 66, 0.2)',
    danger: '#fa3945',
    dangerLight: 'rgba(250, 57, 69, 0.1)',
    success: '#45fa39',
    successLight: 'rgba(69, 250, 57, 0.1)',
    green: '#3fb950',
    orange: '#f0883e',
    red: '#da3633',
    pink: '#d961a1',
    violet: '#8957e5',
    blue: '#378afc',
    // charts
    chartBar: 'rgba(25, 160, 246, 0.6)',
    chartBarBorder: 'rgba(25, 160, 246, 1)',
    chartTicks: 'rgba(255, 255, 255, 0.6)',
    chartGrid: 'rgba(255, 255, 255, 0.2)',
    chartPrimSwellLine: '#45fa39',
    chartSecSwellLine: 'rgba(255, 173, 66, 1)'
  },
  styles: {
    textXs: '11px',
    textSm: '14px',
    textReg: '16px',
    textMd: '22px',
    textLg: '26px',
    textXl: '32px',
    lineHeightSm: '28px',
    lineHeightMd: '32px',
    transition: 'ease .2s',
    borderRadiusSm: '0.25rem',
    borderRadiusMd: '0.35rem',
    boxShadow: '0 2px 4px 0 hsla(198, 45%, 10%, .12)',
    boxShadowInset: 'inset 0 1px 4px 0 rgba(0,0,0,0.05);',
    // heroImage: `url('./images/encinitas.webp')`,
    heroImage: `url('./images/boards.webp')`,
    aboutImage: `url('./images/topo-dark.svg')`
  },
  web: {
    width: '1280px'
  },
  mobile: {
    width: '718px' // split screen
    // width: '720px',
  }
};

// Glassmorphism: {
//		background: rgba(255, 255, 255, 0.2);
//		backdrop-filter: blur(30px);
//		border: 2px solid rgba(255, 255, 255, 0.1);
// }

export const mode = {
  light: LightTheme,
  dark: DarkTheme
};
