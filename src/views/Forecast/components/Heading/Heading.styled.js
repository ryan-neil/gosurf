// Styles
import styled from 'styled-components';

export const StyledHeading = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: none;
  padding-top: 0.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.headerBorder};

  h2 {
    font-size: ${({ theme }) => theme.styles.textLg};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;

    /* Responsive Queries */
    @media (max-width: ${({ theme }) => theme.mobile.width}) {
      font-size: ${({ theme }) => theme.styles.textMd};
    }
  }
`;
