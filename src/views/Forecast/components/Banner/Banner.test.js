/* eslint-disable no-undef */

import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
// theme styles
import { ThemeProvider } from 'styled-components';
import { themeMode } from '../../../../styles/Theme.styled';
// mock data
import bannerMockData from '../../../../mocks/bannerMockData.json';
// component
import Banner from './Banner';

// mock fetch API
const server = setupServer(
  rest.get('/api/weather', (req, res, ctx) => {
    // given "/api/weather?stationId=1617760"
    req.url.searchParams.get('stationId'); // "1617760"

    return res(ctx.status(200), ctx.json(bannerMockData));
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
      <Banner spot={spotMockData[0]} />
    </ThemeProvider>
  )
);

describe('Banner', () => {
  it('Should render water temperature', async () => {
    const waterTempElement = await screen.findByRole('heading', {
      name: /78.3/i,
    });
    expect(waterTempElement).toBeInTheDocument();
  });

  it('Should render air temperature', async () => {
    const airTempElement = await screen.findByRole('heading', {
      name: /71.4/i,
    });
    expect(airTempElement).toBeInTheDocument();
  });
});
