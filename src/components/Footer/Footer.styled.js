import styled from 'styled-components';
import { Github } from '@styled-icons/feather';

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondaryBG};
  padding: 4rem 0;
  /* Image overlay */
  background-image: ${({ theme }) => theme.styles.footerImage};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledGithubIcon = styled(Github)`
  color: ${({ theme }) => theme.colors.heading};
  width: 1.8rem;
  height: 1.8rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  border-radius: ${({ theme }) => theme.styles.borderRadiusSm};
  cursor: pointer;
  transition: ${({ theme }) => theme.styles.transition};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryBG};
  }
`;
