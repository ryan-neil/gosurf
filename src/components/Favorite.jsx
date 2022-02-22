import { useState } from 'react';
// Styles
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
	transition: ${({ theme }) => theme.colors.transition};
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
	&:hover {
		background-color: ${({ theme }) => theme.colors.hover};
	}
`;

const Favorite = () => {
	const [favorite, setFavorite] = useState(false);

	const toggleFavorite = () => {
		return favorite === false ? setFavorite(true) : setFavorite(false);
	};

	// set theme icon
	const favoriteIcon =
		favorite === false ? (
			<StarBorderIcon onClick={toggleFavorite} />
		) : (
			<StarIcon onClick={toggleFavorite} />
		);

	return <span>{favoriteIcon}</span>;
};

export default Favorite;
