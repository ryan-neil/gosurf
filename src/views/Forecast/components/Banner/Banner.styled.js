import styled from 'styled-components';

export const StyledBanner = styled.section`
  width: 100%;
  min-height: 100px;
  height: auto;
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.secondaryBG};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border-radius: ${({ theme }) => theme.styles.borderRadiusMd};
  overflow-x: scroll;

  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* flex items take contents width */
  gap: 1.5rem;
`;

export const StyledBannerItem = styled.div`
  height: auto;
  min-width: 200px;
  width: auto;
  h4 {
    padding-bottom: 0.25rem;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
  img {
    width: 1.6rem;
  }
  p {
    white-space: nowrap;
  }
  .light {
    font-size: ${({ theme }) => theme.styles.textSm};
  }
  .ideal-cond {
    align-self: flex-start; /* flex items take contents width */
    color: ${({ theme }) => theme.colors.success};
    background-color: ${({ theme }) => theme.colors.successLight};
    font-size: ${({ theme }) => theme.styles.textSm};
    padding: 0 0.25rem;
    letter-spacing: 0.025em;
    border-radius: ${({ theme }) => theme.styles.borderRadiusSm};
  }
`;
