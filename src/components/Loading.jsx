import styled from 'styled-components';

const StyledLoading = styled.div`
	height: 100%;
	justify-items: flex-start;
	margin-top: 1rem;
	p {
		color: ${({ theme }) => theme.colors.paragraph};
	}
`;

const Loading = () => {
	return (
		<StyledLoading>
			<p>Loading data...</p>
		</StyledLoading>
	);
};

export default Loading;
