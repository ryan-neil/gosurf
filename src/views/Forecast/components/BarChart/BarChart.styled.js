import styled from 'styled-components';

export const StyledChartContainer = styled.div`
  /* some styles... */
`;

export const StyledChartHeading = styled.p`
  font-size: ${({ theme }) => theme.styles.textXs};
  margin-bottom: 2px;
`;

export const StyledChart = styled.div`
  width: 100%;
  height: auto;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primaryBG};
  border-radius: ${({ theme }) => theme.styles.borderRadiusMd};
`;
