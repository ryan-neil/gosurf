import styled from 'styled-components';
import { Search } from '@styled-icons/feather';

export const StyledSearchBar = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const StyledInputContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.inputBG};
  display: flex;
  align-items: center;
  height: 2.5rem;
  padding: 0 0.25rem;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: ${({ theme }) => theme.styles.borderRadiusMd};
  box-shadow: ${({ theme }) => theme.colors.boxShadowInset};
  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }
  input {
    padding: 0.25rem 0;
    color: ${({ theme }) => theme.colors.paragraph};
    font-size: ${({ theme }) => theme.styles.textSm}; /* 14px */
    letter-spacing: 0.025em;
    text-align: left;
    background: transparent;
    border: none;
    outline: none;
    &::placeholder {
      color: ${({ theme }) => theme.colors.paragraphLight};
    }
  }
`;

export const SearchBarIcon = styled(Search)`
  color: ${({ theme }) => theme.colors.heading};
  width: 1rem;
  margin: 0 0.5rem;
`;

export const StyledInputResults = styled.ul`
  padding: 0;
  margin: 0;
  position: absolute;
  margin-top: 42px;
  width: auto;
  width: 225px;
  height: auto;
  max-height: 300px;
  background-color: ${({ theme }) => theme.colors.secondaryBG};
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: ${({ theme }) => theme.styles.borderRadiusMd};
  overflow: hidden;
  overflow-y: auto;
  // scrollbar styles
  -ms-overflow-style: none; // IE and Edge
  scrollbar-width: none; // Firefox
  &::-webkit-scrollbar {
    display: none; // Chrome, Safari and Opera
  }
  li {
    font-size: 14px; // 14px
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryBG};
    }
    a {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      padding: 0 1rem;
    }
  }
`;
