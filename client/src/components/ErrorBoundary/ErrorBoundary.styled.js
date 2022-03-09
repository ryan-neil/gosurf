import styled from 'styled-components';
import { ErrorOutline } from '@styled-icons/material';

export const StyledErrorBoundary = styled.div`
  font-family: 'Ubuntu', -apple-system, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 2rem;
  img {
    height: 42px;
    width: 42px;
  }
  h1 {
    color: #1b2635;
    font-size: 32px;
    font-weight: 500;
    letter-spacing: 0.025em;
  }
  p {
    color: #fa3945;
    background-color: rgba(250, 57, 69, 0.1);
    padding: 0.5rem;
    border-radius: 0.35rem;
  }
`;

export const ErrorIcon = styled(ErrorOutline)`
  color: #fa3945;
  width: 1.4rem;
  margin-right: 0.5rem;
`;
