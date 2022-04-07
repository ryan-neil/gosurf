import styled from 'styled-components';

export const StyledErrorBoundary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  height: 100vh;
  margin-top: 3rem;
  padding: 0 1rem;
  /* Responsive Queries */
  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    p {
      font-size: ${({ theme }) => theme.styles.textSm};
    }
  }
  .error-message {
    color: #fa3945;
    background-color: rgba(250, 57, 69, 0.1);
    padding: 0.5rem;
    border-radius: 0.35rem;
  }
`;
