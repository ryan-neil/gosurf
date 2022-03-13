import PropTypes from 'prop-types';
// Chart.js
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'; // eslint-disable-line no-unused-vars
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Chart.js datalabels plugin
// Styles
import { StyledChartContainer, StyledChartHeading, StyledChart } from './Charts.styled';

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
        // datalabels plugin styles
        datalabels: {
          anchor: 'end', // https://chartjs-plugin-datalabels.netlify.app/guide/positioning.html#anchoring
          align: 'top', // https://chartjs-plugin-datalabels.netlify.app/guide/positioning.html#alignment-and-offset
          offset: 4, // https://chartjs-plugin-datalabels.netlify.app/guide/positioning.html#alignment-and-offset
          color: chartTicks,
          font: { size: 10 },
        },
      },
    ],
  };

  const options = {
    responsive: true,
    animation: true,
    plugins: { legend: { display: false } },
    // Component chart styles and colors
    scales: {
      xAxis: {
        ticks: {
          color: chartTicks, // tick font color
          font: { size: 10 },
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
          font: { size: 10 },
        },
        grid: {
          display: true, // grid lines on yAxis
          borderDash: [4, 2],
          color: chartGrid,
          borderColor: chartGrid,
        },
        max: Math.max(...yAxis) + 2, // set yAxis maximum tick number
        beginAtZero: true,
      },
    },
  };

  return (
    <StyledChartContainer>
      <StyledChartHeading>{heading} Chart</StyledChartHeading>
      <StyledChart>
        <Bar data={data} options={options} plugins={[ChartDataLabels]} />
      </StyledChart>
    </StyledChartContainer>
  );
};

// prop types
BarChart.propTypes = {
  heading: PropTypes.string.isRequired,
  xAxis: PropTypes.arrayOf(PropTypes.string).isRequired,
  yAxis: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default BarChart;
