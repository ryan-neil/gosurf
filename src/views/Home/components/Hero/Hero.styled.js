import styled from 'styled-components';

export const HeroStyled = styled.section`
  width: ${({ theme }) => theme.web.width};
  max-width: 100%;
  height: 100%;
  padding: 0 1rem;
  margin: 0 auto;
`;

export const HeroContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 500px;
  padding: 1.6rem 1rem;
  margin-top: 10rem;
  border-radius: ${({ theme }) => theme.styles.borderRadiusMd};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  background-color: ${({ theme }) => theme.colors.primaryBG};

  h1 {
    font-size: ${({ theme }) => theme.styles.textXl};
    margin-bottom: 1rem;
  }
  h2 {
    font-size: ${({ theme }) => theme.styles.textMd};
    color: ${({ theme }) => theme.colors.paragraph};
    line-height: ${({ theme }) => theme.styles.lineHeightMd};
    margin-bottom: 2rem;
    .text-underline {
      padding-bottom: 0.25rem;
      border-bottom: solid 2px ${({ theme }) => theme.colors.primary};
    }
  }
  p {
    font-size: ${({ theme }) => theme.styles.textXs};
    color: ${({ theme }) => theme.colors.paragraphLight};
    margin: 0.25rem 0 0 1rem;
  }
`;
