import PropTypes from 'prop-types';
// Chart.js
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'; // eslint-disable-line no-unused-vars
// Styles
import { StyledChartContainer, StyledChartHeading, StyledChart } from './LineChart.styled';

export const LineChart = ({ heading, xAxis, yAxis, yAxisSec }) => {
  // get chart global styles for chart styling
  const style = getComputedStyle(document.body);
  const primaryBG = style.getPropertyValue('--primaryBG');
  const chartBar = style.getPropertyValue('--chartBar');
  const chartBarBorder = style.getPropertyValue('--chartBarBorder');
  const chartPointRadius = style.getPropertyValue('--chartPointRadius');
  const chartTicks = style.getPropertyValue('--chartTicks');
  const chartGrid = style.getPropertyValue('--chartGrid');
  const chartPrimSwellLine = style.getPropertyValue('--chartPrimSwellLine');
  const chartSecSwellLine = style.getPropertyValue('--chartSecSwellLine');
  const chartFontSize = style.getPropertyValue('--chartFontSize');

  const data = {
    labels: xAxis,
    // for multiple lines on the chart add another object inside datasets array
    datasets: [
      {
        // Tides and primary swell line
        label: heading === 'Tides' ? 'Tides Height' : 'Swell Height',
        data: yAxis,
        // styles
        // fill: heading === 'Tides' || false,
        tension: heading === 'Tides' ? 0.2 : 0,
        borderWidth: 1,
        borderRadius: 2,
        pointBorderWidth: 1.25,
        pointRadius: chartPointRadius,
        // colors
        backgroundColor: chartBar,
        borderColor: heading === 'Tides' ? chartBarBorder : chartPrimSwellLine,
        pointBackgroundColor: primaryBG,
        pointBorderColor: heading === 'Tides' ? chartBarBorder : chartPrimSwellLine,
      },
      {
        // Secondary swell line
        label: heading === 'Tides' ? 'Tides Height' : 'Swell Height',
        data: yAxisSec,
        // styles
        tension: 0,
        borderWidth: 1,
        borderRadius: 2,
        pointBorderWidth: 1.25,
        pointRadius: chartPointRadius,
        // colors
        borderColor: chartSecSwellLine,
        pointBackgroundColor: primaryBG,
        pointBorderColor: chartSecSwellLine,
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
          font: { size: chartFontSize },
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
          font: { size: chartFontSize },
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

// prop types
LineChart.propTypes = {
  heading: PropTypes.string.isRequired,
  xAxis: PropTypes.arrayOf(PropTypes.string).isRequired,
  yAxis: PropTypes.arrayOf(PropTypes.number).isRequired,
  yAxisSec: PropTypes.arrayOf(PropTypes.number),
};
