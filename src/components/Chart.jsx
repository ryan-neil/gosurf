// Chart.js
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'; // this is required to make chart.js work
// Styles
import {
	StyledChartContainer,
	StyledChartHeading,
	StyledChart,
} from './styles/Chart.styled';

const Chart = ({ heading, xAxis, yAxis, yAxisSec }) => {
	const data = {
		labels: xAxis,
		datasets: [
			{
				label: 'Wave Height',
				data: yAxis,
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
			bar: {
				backgroundColor: 'rgba(30, 144, 255, 0.6)',
				borderWidth: 2,
				borderRadius: 2,
				borderColor: 'rgba(30, 144, 255, 1)',
				// borderColor: `${({ theme }) => theme.colors.chartBarBorder}`,
			},
		},
		scales: {
			xAxis: {
				ticks: {
					color: 'rgba(0, 0, 0, 0.6)', // tick font color
					font: {
						size: 10, // default font size (12)
					},
				},
				grid: {
					display: false, // grid lines on xAxis
					borderColor: 'rgba(0, 0, 0, 0.2)',
				},
			},
			yAxis: {
				ticks: {
					color: 'rgba(0, 0, 0, 0.6)', // tick font color
					font: {
						size: 10, // default font size (12)
					},
				},
				grid: {
					display: true, // grid lines on yAxis
					borderDash: [4, 2],
					color: 'rgba(0, 0, 0, 0.2)',
					borderColor: 'rgba(0, 0, 0, 0.2)',
				},
				min: 0, // set yAxis minimum tick number
				// max: Math.max(...yAxis), // set yAxis maximum tick number
				max: 10, // set yAxis maximum tick number
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

export default Chart;
