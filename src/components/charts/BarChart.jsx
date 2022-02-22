// Chart.js
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'; // this is required to make chart.js work
// Styles
import {
	StyledChartContainer,
	StyledChartHeading,
	StyledChart,
} from '../styles/Chart.styled';

const BarChart = ({ heading, xAxis, yAxis }) => {
	// get chart global styles for chart styling
	const style = getComputedStyle(document.body);
	const chartBar = style.getPropertyValue('--chartBar');
	const chartBarBorder = style.getPropertyValue('--chartBarBorder');
	const chartTicks = style.getPropertyValue('--chartTicks');
	const chartGrid = style.getPropertyValue('--chartGrid');

	const data = {
		labels: xAxis,
		datasets: [
			{
				label: heading === 'Wave Height' ? 'Wave Height' : 'Wind Speed',
				data: yAxis,
				// styles
				borderWidth: 2,
				borderRadius: 2,
				borderColor: chartBarBorder,
				backgroundColor: chartBar,
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
		// Component chart styles and colors
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
				min: 0, // set yAxis minimum tick number
				// max: Math.max(...yAxis), // set yAxis maximum tick number
				// max: 10, // set yAxis maximum tick number
				beginAtZero: false,
			},
		},
	};

	return (
		<StyledChartContainer>
			<StyledChartHeading>{heading} Chart</StyledChartHeading>
			<StyledChart>
				<Bar data={data} options={options} />
			</StyledChart>
		</StyledChartContainer>
	);
};

export default BarChart;
