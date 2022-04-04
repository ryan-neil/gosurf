/* eslint-disable no-undef */

import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
// theme styles
import { ThemeProvider } from 'styled-components';
import { themeMode } from '../../../../styles/Theme.styled';
// mock data
import spotMockData from '../../../../mocks/spotMockData.json';
import windMockData from '../../../../mocks/windMockData.json';
// component
import { Wind } from './Wind';

// mock fetch API
const server = setupServer(
  rest.get('/api/wind', (req, res, ctx) => {
    // given "/api/weather?stationId=1617760"
    req.url.searchParams.get('stationId'); // "1617760"

    return res(ctx.status(200), ctx.json(windMockData));
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
      <Wind spot={spotMockData[0]} />
    </ThemeProvider>
  )
);

describe.skip('Wind', () => {
  it('Should render current wind speed', async () => {
    const windSpeedElement = await screen.findByText(/7/i);
    expect(windSpeedElement).toBeInTheDocument();
  });

  it('Should render current wind direction', async () => {
    const windDirectionElement = await screen.findByText(/NE/i);
    expect(windDirectionElement).toBeInTheDocument();
  });

  it('Should render current wind degree', async () => {
    const windDegreeElement = await screen.findByText(/56/i);
    expect(windDegreeElement).toBeInTheDocument();
  });
});
