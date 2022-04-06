import styled from 'styled-components';

export const StyledSearch = styled.main`
  min-height: 100vh;
  margin-top: 1rem;
`;

export const StyledHeaderBackground = styled.div`
  position: absolute;
  top: 0px;
  background-color: ${({ theme }) => theme.colors.headerBG};
  width: 100%;
  height: 130px;
  z-index: -1;
`;

export const StyledSearchHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const StyledSearchBody = styled.div`
  margin-top: 1.6rem;
`;

export const StyledInputResults = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style-type: none;
  padding-bottom: 1rem;
  li {
    padding: 0.5rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.inputBorder};
    &:last-of-type {
      border-bottom: none;
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondaryBG};
    }
    .results-location {
      font-size: ${({ theme }) => theme.styles.textSm};
    }
  }
`;
