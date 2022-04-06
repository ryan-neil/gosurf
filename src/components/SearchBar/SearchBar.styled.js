import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const StyledInputResults = styled.ul`
  padding: 0;
  margin: 0;
  position: absolute;
  margin-top: 2.8rem;
  width: auto;
  width: 225px;
  height: auto;
  max-height: 300px;
  background-color: ${({ theme }) => theme.colors.secondaryBG};
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: ${({ theme }) => theme.styles.borderRadiusMd};
  box-shadow: ${({ theme }) => theme.colors.boxShadowMd};
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

  /* Responsive Queries */
  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    margin-top: 2.8rem;
  }
`;
