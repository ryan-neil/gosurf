import styled from 'styled-components';
import { ErrorOutline } from '@styled-icons/material';

export const StyledError = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh;
  margin-top: 1rem;
  h3 {
    color: ${({ theme }) => theme.colors.tertiary};
    font-size: ${({ theme }) => theme.styles.textReg};
    background-color: ${({ theme }) => theme.colors.tertiaryLight};
    padding: 0.5rem;
    border-radius: ${({ theme }) => theme.styles.borderRadiusMd};
    /* Responsive Queries */
    @media (max-width: ${({ theme }) => theme.mobile.width}) {
      font-size: ${({ theme }) => theme.styles.textReg};
    }
  }
`;

export const ErrorIcon = styled(ErrorOutline)`
  color: ${({ theme }) => theme.colors.tertiary};
  width: 2rem;
  margin-right: 0.5rem;
  /* Responsive Queries */
  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    width: 1.4rem;
  }
`;
