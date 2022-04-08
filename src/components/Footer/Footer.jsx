// Components
import { Logo } from '../Logo';
// Styles
import { StyledFooter, StyledGithubIcon } from './Footer.styled';
import { Container, Flex, FlexCol } from '../../styles/Utils.styled';

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Flex center spaceBetween>
          <FlexCol gapMd>
            <Logo footer />
            <p>© {new Date().getFullYear()}</p>
          </FlexCol>
          <a href="https://github.com/ryan-neil/gosurf" target="_blank" rel="noreferrer">
            <StyledGithubIcon />
          </a>
        </Flex>
      </Container>
    </StyledFooter>
  );
};
