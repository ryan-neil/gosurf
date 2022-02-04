import styled, { css } from 'styled-components';

export const Container = styled.div`
	width: ${({ theme }) => theme.web.width};
	max-width: 100%;
	padding: 0 1rem;
	margin: 0 auto;
`;

export const Flex = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	${(props) => props.gapSm && css`gap: 0.5rem;`};
	${(props) => props.gapMd && css`gap: 1rem;`};
	${(props) => props.spaceBetween && css`justify-content: space-between;`};
`;

export const FlexCol = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	${(props) => props.gapSm && css`gap: 0.5rem;`};
	${(props) => props.gapMd && css`gap: 1rem;`};
	${(props) => props.spaceBetween && css`justify-content: space-between;`};
`;
