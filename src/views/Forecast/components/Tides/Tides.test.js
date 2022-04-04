/* eslint-disable no-undef */

import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
// theme styles
import { ThemeProvider } from 'styled-components';
import { themeMode } from '../../../../styles/Theme.styled';
// mock data
import spotMockData from '../../../../mocks/spotMockData.json';
import tidesMockData from '../../../../mocks/tidesMockData.json';
// component
import { Tides } from './Tides';

// mock fetch API
const server = setupServer(
  rest.get('/api/tides', (req, res, ctx) => {
    // given "/api/weather?stationId=1617760"
    req.url.searchParams.get('stationId'); // "1617760"

    return res(ctx.status(200), ctx.json(tidesMockData));
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
      <Tides spot={spotMockData[0]} />
    </ThemeProvider>
  )
);

describe.skip('Tides', () => {
  it('Should render the type of tide', async () => {
    const tidesTypeElement = await screen.findByText(/Low/i);
    expect(tidesTypeElement).toBeInTheDocument();
  });

  it('Should render the time of tide', async () => {
    const tidesTimeElement = await screen.findByText(/1:17/i);
    expect(tidesTimeElement).toBeInTheDocument();
  });

  it('Should render the height of tide', async () => {
    const tidesHeightElement = await screen.findByText(/0.02/i);
    expect(tidesHeightElement).toBeInTheDocument();
  });
});
