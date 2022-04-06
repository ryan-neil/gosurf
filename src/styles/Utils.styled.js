import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: ${({ theme }) => theme.web.width};
  max-width: 100%;
  height: 100%;
  padding: 0 1rem;
  margin: 0 auto;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;

  ${(props) =>
    props.gapSm &&
    css`
      gap: 0.5rem;
    `};
  ${(props) =>
    props.gapMd &&
    css`
      gap: 1rem;
    `};
  ${(props) =>
    props.center &&
    css`
      align-items: center;
    `};
  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `};
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.gapSm &&
    css`
      gap: 0.5rem;
    `};
  ${(props) =>
    props.gapMd &&
    css`
      gap: 1rem;
    `};
  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `};
`;

export const IconStyled = styled.figure`
  color: ${({ theme }) => theme.colors.white};
  width: 1.8rem;
  height: 1.8rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  border-radius: ${({ theme }) => theme.styles.borderRadiusSm};
  cursor: pointer;
  transition: ${({ theme }) => theme.styles.transition};
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const ButtonStyled = styled.button`
  font-family: 'Ubuntu', -apple-system, sans-serif;
  font-size: ${({ theme }) => theme.styles.textReg};
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondaryBG};
  padding: 0.35rem 1rem;
  border-radius: ${({ theme }) => theme.styles.borderRadiusMd};
  cursor: pointer;
  transition: ${({ theme }) => theme.styles.transition};
  &:hover {
    opacity: 0.8;
  }
`;
