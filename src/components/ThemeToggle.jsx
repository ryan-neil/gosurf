import { useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
// Styles
import styled from 'styled-components';
import { LightMode, DarkMode } from '@styled-icons/material';
// Sun Icon
export const SunIcon = styled(LightMode)`
	color: ${({ theme }) => theme.colors.white};
	/* color: ${({ theme }) => theme.colors.heading}; */
	width: 1.8rem;
	height: 1.8rem;
	padding-left: 0.25rem;
	padding-right: 0.25rem;
	border-radius: ${({ theme }) => theme.styles.borderRadiusSm};
	cursor: pointer;
	transition: ${({ theme }) => theme.styles.transition};
	&:hover {
		background-color: ${({ theme }) => theme.colors.hover};
	}
`;
// Moon Icon
export const MoonIcon = styled(DarkMode)`
	color: ${({ theme }) => theme.colors.white};
	/* color: ${({ theme }) => theme.colors.heading}; */
	width: 1.8rem;
	height: 1.8rem;
	padding-left: 0.25rem;
	padding-right: 0.25rem;
	border-radius: ${({ theme }) => theme.styles.borderRadiusSm};
	cursor: pointer;
	transition: ${({ theme }) => theme.styles.transition};
	&:hover {
		background-color: ${({ theme }) => theme.colors.hover};
	}
`;

const ThemeToggle = ({ theme, setTheme }) => {
	const handleClick = () => {
		return theme === 'light' ? setTheme('dark') : setTheme('light');
	};

	const themeIcon =
		theme === 'light' ? (
			<MoonIcon onClick={handleClick} />
		) : (
			<SunIcon onClick={handleClick} />
		);

	return <span>{themeIcon}</span>;
};

export default ThemeToggle;
