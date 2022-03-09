import styled from 'styled-components';

export const StyledApp = styled.div`
  position: relative; /* this needs to be here for the Forecast background header */
  min-height: 100vh;
  height: auto;
  background-color: ${({ theme }) => theme.colors.primaryBG};
  z-index: -1; /* this needs to be here for the Forecast background header */
`;
