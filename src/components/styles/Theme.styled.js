// root theme styles
// https://blog.agney.dev/theming-on-styled-components/

export const LightTheme = {
	colors: {
		primary: '#19A0F6',
		primaryLight: 'rgba(25, 160, 246, 0.1)',
		secondary: '#db757f',
		primaryBG: '#ffffff',
		secondaryBG: '#f6f7f9',
		heading: '#23272f',
		paragraph: '#404756',
		paragraphLight: '#99A1B3',
		border: '#444c56',
		inputBG: '#EBECF0',
		// misc
		boxShadow: '',
		boxShadowInset: 'inset 0 1px 4px 0 rgba(0,0,0,0.05);',
		tertiary: '#FFAD42',
		green: '#45fa39',
		orange: '#f0883e',
		red: '#da3633',
		pink: '#d961a1',
		violet: '#8957e5',
		blue: '#378afc'
	},
	web: {
		width: '1275px'
	},
	mobile: {
		width: '768px'
	}
};

export const DarkTheme = {
	colors: {
		primary: '#19A0F6',
		primaryLight: 'rgba(25, 160, 246, 0.1)',
		secondary: '#dd6571',
		primaryBG: '#23272f',
		secondaryBG: '#343a46',
		heading: '#f6f7f9',
		paragraph: '#EBECF0',
		paragraphLight: '#99A1B3',
		border: '#f5f5f5',
		inputBG: '#343A46',
		// misc
		transition: 'ease .2s',
		boxShadow: '0 1px 4px 0 rgba(0, 0, 0, .05)',
		boxShadowInset: 'inset 0 1px 4px 0 rgba(0, 0, 0, .05)',
		tertiary: '#FFAD42',
		green: '#45fa39',
		orange: '#f0883e',
		red: '#da3633',
		pink: '#d961a1',
		violet: '#8957e5',
		blue: '#378afc'
	},
	web: {
		width: '1275px'
	},
	mobile: {
		width: '768px'
	}
};

export const mode = {
	light: LightTheme,
	dark: DarkTheme
};
