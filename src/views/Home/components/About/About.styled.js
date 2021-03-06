import styled from 'styled-components';

export const AboutContainerStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryBG};
  margin-top: 8rem;
  padding: 4rem 0;
  width: 100%;
  /* Image overlay */
  background-image: ${({ theme }) => theme.styles.aboutImage};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const CardContainerStyled = styled.div`
  width: ${({ theme }) => theme.web.width};
  max-width: 100%;
  height: 100%;
  padding: 0 1rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 1.6rem;

  /* Responsive Queries */
  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    flex-direction: column;
  }
`;

export const CardStyled = styled.div`
  flex-basis: 100%;
  img {
    width: 52px;
    height: 52px;
  }
  h3 {
    font-size: ${({ theme }) => theme.styles.textReg};
    color: ${({ theme }) => theme.colors.heading};
    line-height: ${({ theme }) => theme.styles.lineHeightMd};
    margin: 0.8rem 0;
  }
  p {
    font-size: ${({ theme }) => theme.styles.textSm};
    color: ${({ theme }) => theme.colors.paragraph};
    line-height: ${({ theme }) => theme.styles.lineHeightSm};
  }
`;
