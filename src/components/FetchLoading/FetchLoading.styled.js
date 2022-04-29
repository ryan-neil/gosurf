import styled from 'styled-components';

export const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  p {
    color: ${({ theme }) => theme.colors.paragraph};
  }
`;
