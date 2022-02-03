// root theme styles
// https://blog.agney.dev/theming-on-styled-components/

export const LightTheme = {
	colors: {
		primary: '#19A0F6',
		primaryLight: 'rgba(25, 160, 246, 0.1)',
		secondary: '#1a2634',
		primaryBG: '#ffffff',
		secondaryBG: 'hsl(217, 45%, 97%)',
		heading: '#1b2635',
		paragraph: 'rgba(27, 38, 53, 0.7)',
		paragraphLight: 'rgba(27, 38, 53, 0.6)',
		border: '#E4E5E9',
		inputBG: 'hsl(217, 45%, 97%)',
		// misc
		tertiary: '#ffad42',
		danger: '#fa3945',
		success: '#45fa39',
		green: '#3fb950',
		orange: '#f0883e',
		red: '#da3633',
		pink: '#d961a1',
		violet: '#8957e5',
		blue: '#378afc'
	},
	styles: {
		transition: 'ease .2s',
		borderRadiusSm: '0.25rem',
		borderRadiusMd: '0.35rem',
		boxShadow: '0 1px 4px 0 rgba(0, 0, 0, .05)',
		boxShadowInset: 'inset 0 1px 4px 0 rgba(0,0,0,0.05);'
	},
	web: {
		width: '1275px'
	},
	mobile: {
		width: '718px'
	}
};

export const DarkTheme = {
	colors: {
		primary: '#19A0F6',
		primaryLight: 'rgba(25, 160, 246, 0.1)',
		secondary: '#1a2634',
		primaryBG: '#1b2635',
		secondaryBG: '#233044',
		heading: '#ffffff',
		paragraph: 'rgba(255, 255, 255, 0.7);',
		paragraphLight: 'rgba(255, 255, 255, 0.6);',
		border: '#323844',
		inputBG: '#233044',
		// misc
		tertiary: '#ffad42',
		danger: '#fa3945',
		success: '#45fa39',
		green: '#3fb950',
		orange: '#f0883e',
		red: '#da3633',
		pink: '#d961a1',
		violet: '#8957e5',
		blue: '#378afc'
	},
	styles: {
		transition: 'ease .2s',
		borderRadiusSm: '0.25rem',
		borderRadiusMd: '0.35rem',
		boxShadow: '0 1px 4px 0 rgba(0, 0, 0, .05)',
		boxShadowInset: 'inset 0 1px 4px 0 rgba(0,0,0,0.05);'
	},
	web: {
		width: '1275px'
	},
	mobile: {
		width: '718px'
	}
};

export const mode = {
	light: LightTheme,
	dark: DarkTheme
};
