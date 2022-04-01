import styled, { css } from 'styled-components';

export const StyledLogo = styled.div`
  a {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  img {
    height: 36px;
    width: 36px;
    margin-right: 0.5rem;
  }
  h1 {
    font-size: ${({ theme }) => theme.styles.textLg};
    font-weight: 500;
    margin-right: 0.5rem;
    letter-spacing: 0.025em;
    /* Props */
    ${({ header }) =>
      header &&
      css`
        color: ${({ theme }) => theme.colors.white};
      `}
    ${({ footer }) =>
      footer &&
      css`
        color: ${({ theme }) => theme.colors.heading};
      `}
  }
  p {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primaryLight};
    font-size: ${({ theme }) => theme.styles.textXs};
    padding: 0 0.25rem;
    letter-spacing: 0.025em;
    border-radius: ${({ theme }) => theme.styles.borderRadiusSm};
    text-transform: uppercase;
  }

  /* Props */
  ${({ header }) =>
    header &&
    css`
      h1 {
        color: ${({ theme }) => theme.colors.white};
      }
    `}
  ${({ footer }) =>
    footer &&
    css`
      h1 {
        color: ${({ theme }) => theme.colors.heading};
      }
    `}
`;
