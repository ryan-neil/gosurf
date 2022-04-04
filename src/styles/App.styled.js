import styled from 'styled-components';

export const StyledApp = styled.div`
  position: relative; /* this needs to be here for the Forecast background header */
  min-height: 100vh;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primaryBG};
  z-index: -1; /* this needs to be here for the Forecast background header */
`;
