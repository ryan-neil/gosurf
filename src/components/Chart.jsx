import { StyledChartContainer, StyledChartHeading, StyledChart } from './styles/Chart.styled';

const Chart = ({ heading, xAxis, yAxis }) => {
	return (
		<StyledChartContainer>
			<StyledChartHeading>{heading} Chart</StyledChartHeading>
			<StyledChart />
		</StyledChartContainer>
	);
};

export default Chart;
