import { StyledChartContainer, StyledChartHeading, StyledChart } from './styles/Chart.styled';

const Chart = ({ heading, xAxis, yAxis, yAxisSec }) => {
	// console.log(heading);
	// console.log(xAxis);
	// console.log(yAxis);

	return (
		<StyledChartContainer>
			<StyledChartHeading>{heading} Chart</StyledChartHeading>
			<StyledChart />
		</StyledChartContainer>
	);
};

export default Chart;
