// Chart.js
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'; // this is required to make chart.js work
// Styles
import {
	StyledChartContainer,
	StyledChartHeading,
	StyledChart,
} from '../styles/Chart.styled';

const LineChart = ({ heading, xAxis, yAxis, yAxisSec }) => {
	// get chart global styles for chart styling
	const style = getComputedStyle(document.body);
	const primaryBG = style.getPropertyValue('--primaryBG');
	const chartBar = style.getPropertyValue('--chartBar');
	const chartBarBorder = style.getPropertyValue('--chartBarBorder');
	const chartTicks = style.getPropertyValue('--chartTicks');
	const chartGrid = style.getPropertyValue('--chartGrid');
	const chartPrimSwellLine = style.getPropertyValue('--chartPrimSwellLine');
	const chartSecSwellLine = style.getPropertyValue('--chartSecSwellLine');

	const data = {
		labels: xAxis,
		// for multiple lines on the chart add another object inside datasets array
		datasets: [
			{
				label: heading === 'Tides' ? 'Tides Height' : 'Swell Height',
				data: yAxis,
			},
			{
				label: heading === 'Tides' ? 'Tides Height' : 'Swell Height',
				data: yAxisSec,
			},
		],
	};

	const options = {
		responsive: true,
		animation: true,
		plugins: {
			legend: {
				display: false,
			},
		},
		// styling
		elements: {
			point: {
				borderWidth: 1,
				backgroundColor: primaryBG,
				borderColor: heading === 'Tides' ? chartBarBorder : chartPrimSwellLine,
			},
			line: {
				borderWidth: 1,
				backgroundColor: heading === 'Tides' ? chartBar : 'none',
				borderColor: heading === 'Tides' ? chartBarBorder : chartPrimSwellLine,
				fill: heading === 'Tides' ? true : false,
				tension: heading === 'Tides' ? 0.35 : 0,
			},
		},
		scales: {
			xAxis: {
				ticks: {
					color: chartTicks, // tick font color
					font: {
						size: 10, // default font size (12)
					},
				},
				grid: {
					display: false, // grid lines on xAxis
					color: chartGrid,
					borderColor: chartGrid,
				},
			},
			yAxis: {
				ticks: {
					color: chartTicks, // tick font color
					font: {
						size: 10, // default font size (12)
					},
				},
				grid: {
					display: true, // grid lines on yAxis
					borderDash: [4, 2],
					color: chartGrid,
					borderColor: chartGrid,
				},
				beginAtZero: false,
			},
		},
	};

	return (
		<StyledChartContainer>
			<StyledChartHeading>{heading} Chart</StyledChartHeading>
			<StyledChart>
				<Line data={data} options={options} />
			</StyledChart>
		</StyledChartContainer>
	);
};

export default LineChart;
