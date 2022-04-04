import styled from 'styled-components';
import { User } from '@styled-icons/feather';

export const ProfileIcon = styled(User)`
  stroke-width: 2px;
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
