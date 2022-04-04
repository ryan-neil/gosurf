/* eslint-disable no-undef */

import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
// theme styles
import { ThemeProvider } from 'styled-components';
import { themeMode } from '../../../../styles/Theme.styled';
// mock data
import spotMockData from '../../../../mocks/spotMockData.json';
import swellMockData from '../../../../mocks/swellMockData.json';
// component
import { Swell } from './Swell';

// mock fetch API
const server = setupServer(
  rest.get('/api/swell', (req, res, ctx) => {
    // given "/api/wave?lat=19.7558&lon=-155.0908"
    req.url.searchParams.getAll('lat', 'lon'); // "1617760"

    return res(ctx.status(200), ctx.json(swellMockData));
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
      <Swell spot={spotMockData[0]} />
    </ThemeProvider>
  )
);

describe.skip('Wind', () => {
  it('Should render primary swell height', async () => {
    const primSwellHeightElement = await screen.findByText(/0.1/i);
    expect(primSwellHeightElement).toBeInTheDocument();
  });
});
