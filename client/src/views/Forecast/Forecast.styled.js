import styled, { css } from 'styled-components';

export const StyledForecast = styled.main`
  width: 100%;
  height: auto;
  padding-bottom: 3rem;
`;

export const StyledHeaderBackground = styled.div`
  position: absolute;
  top: 0px;
  background-color: ${({ theme }) => theme.colors.headerBG};
  width: 100%;
  height: 188px;
  z-index: -1;
`;

export const StyledGridContainer = styled.section`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;
  /* Responsive Queries */
  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StyledGridItem = styled.div`
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  background: ${({ theme }) => theme.colors.secondaryBG};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.styles.borderRadiusMd};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  h3 {
    font-size: ${({ theme }) => theme.styles.textMd};
  }
  img {
    width: 2rem;
  }
`;

export const StyledGridItemBody = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .primary-data {
    color: ${({ theme }) => theme.colors.heading};
    font-size: ${({ theme }) => theme.styles.textXl};
  }

  ${(props) =>
    props.tide &&
    css`
      /* gap: 0.5rem; */
      div {
        padding: 0.35rem 0;
        border-bottom: 1px solid ${({ theme }) => theme.colors.border};
        &:last-of-type {
          border-bottom: none;
        }
      }
    `};

  ${(props) =>
    props.swell &&
    css`
      flex-direction: row;
    `};
`;

export const StyledGridItemChart = styled.div`
  min-height: 200px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primaryBG};
  border-radius: ${({ theme }) => theme.styles.borderRadiusMd};
`;

export const StyledSwellTag = styled.span`
  width: 1rem;
  height: 1rem;
  border-radius: ${({ theme }) => theme.styles.borderRadiusSm};
  margin-top: 0.25rem;

  ${(props) =>
    props.primary &&
    css`
      background-color: ${({ theme }) => theme.colors.chartPrimSwellLine};
    `};

  ${(props) =>
    props.secondary &&
    css`
      background-color: ${({ theme }) => theme.colors.tertiary};
    `};
`;
