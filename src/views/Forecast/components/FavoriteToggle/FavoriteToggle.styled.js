import styled from 'styled-components';
import { Star, StarBorder } from '@styled-icons/material';

// Star Outline Icon
export const StarBorderIcon = styled(StarBorder)`
	color: ${({ theme }) => theme.colors.tertiary};
	width: 2rem;
	height: 2rem;
	padding-left: 0.25rem;
	padding-right: 0.25rem;
	border-radius: ${({ theme }) => theme.styles.borderRadiusSm};
	cursor: pointer;
	transition: ${({ theme }) => theme.styles.transition};
	&:hover {
		background-color: ${({ theme }) => theme.colors.hover};
	}
`;

// Star Icon
export const StarIcon = styled(Star)`
	color: ${({ theme }) => theme.colors.tertiary};
	width: 2rem;
	height: 2rem;
	padding-left: 0.25rem;
	padding-right: 0.25rem;
	border-radius: ${({ theme }) => theme.styles.borderRadiusSm};
	cursor: pointer;
	transition: ${({ theme }) => theme.styles.transition};
	&:hover {
		background-color: ${({ theme }) => theme.colors.hover};
	}
`;
