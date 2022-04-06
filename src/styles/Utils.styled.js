import styled, { css } from 'styled-components';
import { Search } from '@styled-icons/feather';

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

export const StyledInput = styled.div`
  background-color: ${({ theme }) => theme.colors.inputBG};
  display: flex;
  align-items: center;
  flex: none;
  height: 2.5rem;
  padding: 0 0.25rem;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: ${({ theme }) => theme.styles.borderRadiusMd};
  box-shadow: ${({ theme }) => theme.colors.boxShadowInset};

  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }
  input {
    width: 200px;
    padding: 0.25rem 0;
    color: ${({ theme }) => theme.colors.paragraph};
    font-size: ${({ theme }) => theme.styles.textSm}; /* 14px */
    letter-spacing: 0.025em;
    text-align: left;
    background: transparent;
    border: none;
    outline: none;
    &::placeholder {
      color: ${({ theme }) => theme.colors.paragraphLight};
    }
  }
  /* Props */
  ${({ error }) =>
    error &&
    css`
      outline: 1px solid ${({ theme }) => theme.colors.danger};
      padding-left: 1rem;
      input::placeholder {
        color: ${({ theme }) => theme.colors.danger};
      }
    `}
`;

export const SearchBarIcon = styled(Search)`
  color: ${({ theme }) => theme.colors.heading};
  width: 1rem;
  margin: 0 0.5rem;
`;

export const StyledButton = styled.button`
  font-family: 'Ubuntu', -apple-system, sans-serif;
  font-size: ${({ theme }) => theme.styles.textSm};
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
