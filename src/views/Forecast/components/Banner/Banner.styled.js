import styled from 'styled-components';
import { Droplet, Sun } from '@styled-icons/feather';

export const StyledBanner = styled.section`
  min-height: 100px;
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.secondaryBG};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border-radius: ${({ theme }) => theme.styles.borderRadiusMd};
  overflow-x: auto;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
`;

export const StyledBannerItem = styled.div`
  flex-grow: 1;
  width: max-content;
  white-space: nowrap;
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
    width: max-content;
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
  stroke-width: 2px;
  color: ${({ theme }) => theme.colors.primary};
  width: 1.8rem;
`;

// Air Icon
export const StyledAirIcon = styled(Sun)`
  stroke-width: 2px;
  color: ${({ theme }) => theme.colors.primary};
  width: 1.8rem;
`;
