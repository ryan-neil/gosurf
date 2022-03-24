import styled from 'styled-components';
import { Sun, Moon } from '@styled-icons/feather';

// Sun Icon
export const StyledSunIcon = styled(Sun)`
  color: ${({ theme }) => theme.colors.white};
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
export const StyledMoonIcon = styled(Moon)`
  color: ${({ theme }) => theme.colors.white};
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
