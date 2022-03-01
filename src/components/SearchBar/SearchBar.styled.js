import styled, { css } from 'styled-components';
import { Search } from '@styled-icons/material';

export const StyledSearchBar = styled.div`
  /* Responsive Queries */
  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    display: none;
    /* Props */
    ${({ mobile }) =>
      mobile &&
      css`
        display: block;
      `}
  }
  .results-container {
    position: absolute;
    margin-top: 5px;
    width: auto;
    width: 225px;
    height: auto;
    max-height: 300px;
    background-color: ${({ theme }) => theme.colors.primaryBG};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.styles.borderRadiusMd};
    overflow: hidden;
    overflow-y: auto;
    /* Hide scrollbar */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari and Opera */
    }
    .results-item {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      padding: 0 1rem;
      p {
        font-size: ${({ theme }) => theme.styles.textSm}; /* 14px */
      }
      &:hover {
        background-color: ${({ theme }) => theme.colors.secondaryBG};
      }
    }
  }
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

  /* Props */
  ${({ error }) =>
    error &&
    css`
      outline: 1px solid ${({ theme }) => theme.colors.danger};
    `}
`;

export const SearchBarIcon = styled(Search)`
  color: ${({ theme }) => theme.colors.paragraph};
  width: 1rem;
  margin: 0 0.5rem;
`;
