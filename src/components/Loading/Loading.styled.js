import styled from 'styled-components';

export const StyledLoading = styled.div`
	height: 100%;
	justify-items: flex-start;
	margin-top: 1rem;
	p {
		color: ${({ theme }) => theme.colors.paragraph};
	}
`;
