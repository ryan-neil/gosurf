import styled from 'styled-components';
import { Search } from '@styled-icons/feather';

// Search Icon
export const SearchIcon = styled(Search)`
  display: none;
  color: ${({ theme }) => theme.colors.white};
  width: 1.8rem;
  height: 1.8rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  border-radius: ${({ theme }) => theme.styles.borderRadiusSm};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
  /* Responsive Queries */
  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    display: block;
  }
`;
