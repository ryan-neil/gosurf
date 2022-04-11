import styled from 'styled-components';
import { Star, StarBorder } from '@styled-icons/material';

// Star Outline Icon
export const StarBorderIcon = styled(StarBorder)`
  color: ${({ theme }) => theme.colors.tertiary};
  min-width: 1.8rem;
  height: 1.8rem;
  padding: 0 0.25rem;
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
  min-width: 1.8rem;
  height: 1.8rem;
  padding: 0 0.25rem;
  border-radius: ${({ theme }) => theme.styles.borderRadiusSm};
  cursor: pointer;
  transition: ${({ theme }) => theme.styles.transition};
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;
