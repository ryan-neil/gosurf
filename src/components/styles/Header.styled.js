// https://fonts.google.com/icons?selected=Material+Icons
import styled from 'styled-components';
import { Search, LightMode, DarkMode } from '@styled-icons/material';

// Header
export const StyledHeader = styled.header`
	/* box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); */
	/* background-color: ${({ theme }) => theme.colors.primaryBG}; */
`;

// Navbar
export const StyledNav = styled.nav`
	padding: 0.5rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

// Logo
export const StyledLogo = styled.div`
	a {
		display: flex;
		align-items: center;
		cursor: pointer;
	}
	img {
		height: 36px;
		width: 36px;
		margin-right: 0.5rem;
	}
	h1 {
		font-size: ${({ theme }) => theme.styles.textLg};
		font-weight: 500;
		margin-right: 0.5rem;
		letter-spacing: 0.025em;
	}
	p {
		color: ${({ theme }) => theme.colors.primary};
		background-color: ${({ theme }) => theme.colors.primaryLight};
		font-size: ${({ theme }) => theme.styles.textXs};
		padding: 0 0.25rem;
		letter-spacing: 0.025em;
		border-radius: ${({ theme }) => theme.styles.borderRadiusSm};
		text-transform: uppercase;
	}
`;

// Search Icon
export const SearchIcon = styled(Search)`
	display: none;
	color: ${({ theme }) => theme.colors.heading};
	width: 1.8rem;
	height: 1.8rem;
	margin-right: 0.5rem;
	padding-left: 0.25rem;
	padding-right: 0.25rem;
	border-radius: ${({ theme }) => theme.styles.borderRadiusSm};
	cursor: pointer;
	&:hover {
		background-color: ${({ theme }) => theme.colors.secondaryBG};
	}
	/* Responsive Queries */
	@media (max-width: ${({ theme }) => theme.mobile.width}) {
		display: block;
	}
`;
// Sun Icon
export const SunIcon = styled(LightMode)`
	color: ${({ theme }) => theme.colors.heading};
	width: 1.8rem;
	height: 1.8rem;
	padding-left: 0.25rem;
	padding-right: 0.25rem;
	border-radius: ${({ theme }) => theme.styles.borderRadiusSm};
	cursor: pointer;
	transition: ${({ theme }) => theme.colors.transition};
	&:hover {
		background-color: ${({ theme }) => theme.colors.secondaryBG};
	}
`;
// Moon Icon
export const MoonIcon = styled(DarkMode)`
	color: ${({ theme }) => theme.colors.heading};
	width: 1.8rem;
	height: 1.8rem;
	padding-left: 0.25rem;
	padding-right: 0.25rem;
	border-radius: ${({ theme }) => theme.styles.borderRadiusSm};
	cursor: pointer;
	&:hover {
		background-color: ${({ theme }) => theme.colors.secondaryBG};
	}
`;
