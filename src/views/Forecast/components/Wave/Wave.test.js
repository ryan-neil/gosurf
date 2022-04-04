/* eslint-disable no-undef */

import { Chart as ChartJS } from 'chart.js/auto'; // eslint-disable-line no-unused-vars

import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
// theme styles
import { ThemeProvider } from 'styled-components';
import { themeMode } from '../../../../styles/Theme.styled';
// mock data
import spotMockData from '../../../../mocks/spotMockData.json';
import waveMockData from '../../../../mocks/waveMockData.json';
// component
import { Wave } from './Wave';

// mock fetch API
const server = setupServer(
  rest.get('/api/wave', (req, res, ctx) => {
    // given "/api/wave?lat=19.7558&lon=-155.0908"
    req.url.searchParams.getAll('lat', 'lon'); // "1617760"

    return res(ctx.status(200), ctx.json(waveMockData));
  })
);

// need to listen for the server once before all tests
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const theme = 'light';
beforeEach(() =>
  render(
    <ThemeProvider theme={themeMode[theme]}>
      <Wave spot={spotMockData[0]} />
    </ThemeProvider>
  )
);

// StackOverflow: Failing test in react by using chart.js
// Chartjs Docs (): https://github.com/reactchartjs/react-chartjs-2/blob/master/test/chart.test.tsx
// https://stackoverflow.com/questions/68146899/failing-test-in-react-by-using-chart-js

describe('Wave', () => {
  it('Should render minimum and maximum wave height range', async () => {
    const waveHeightsElement = await screen.findByText(/8-9/i);
    expect(waveHeightsElement).toBeInTheDocument();
  });

  it('Should render body sizing text', async () => {
    const bodyHeightsElement = await screen.findByText(/Double overhead to triple overhead/i);
    expect(bodyHeightsElement).toBeInTheDocument();
  });
});
