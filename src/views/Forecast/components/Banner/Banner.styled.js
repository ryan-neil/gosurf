import styled from 'styled-components';
import { Droplet, Sun } from '@styled-icons/feather';

export const StyledBanner = styled.section`
  width: 100%;
  min-height: 100px;
  height: auto;
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.secondaryBG};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border-radius: ${({ theme }) => theme.styles.borderRadiusMd};
  overflow-x: auto;
  // scrollbar-width: none; // hide scrollbar on firefox

  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* flex items take contents width */
  gap: 1.5rem;
`;

export const StyledBannerItem = styled.div`
  height: auto;
  min-width: 200px;
  width: auto;
  h3 {
    padding-bottom: 0.25rem;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
  h4 {
    color: ${({ theme }) => theme.colors.paragraph};
    font-size: ${({ theme }) => theme.styles.textMd};
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

// Water Icon
export const StyledWaterIcon = styled(Droplet)`
  color: ${({ theme }) => theme.colors.primary};
  width: 1.8rem;
`;

// Air Icon
export const StyledAirIcon = styled(Sun)`
  color: ${({ theme }) => theme.colors.primary};
  width: 1.8rem;
`;
