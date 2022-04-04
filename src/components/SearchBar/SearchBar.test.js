/* eslint-disable no-undef */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
// theme styles
import { ThemeProvider } from 'styled-components';
import { themeMode } from '../../styles/Theme.styled';

// api context
import SpotsDataProvider from '../../context/SpotsContext';
// mock data
import spotsMockData from '../../mocks/spotsMockData.json';
// component
import { SearchBar } from './SearchBar';

// mock fetch API
const server = setupServer(
  rest.get('/api/spots', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(spotsMockData));
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
      <SpotsDataProvider>
        <SearchBar />
      </SpotsDataProvider>
    </ThemeProvider>
  )
);

// SearchBar testing
describe('SearchBar', () => {
  it('Should be initially empty', async () => {
    const searchInputElement = await screen.findByRole('textbox');
    expect(searchInputElement.value).toBe('');
  });

  it('Should be able to search', async () => {
    const searchInputElement = await screen.findByRole('textbox');
    userEvent.type(searchInputElement, 'honls');

    expect(searchInputElement.value).toBe('honls');
  });
});

// SearchBar container testing
describe('SearchBar results container', () => {
  it('Should render six list items', async () => {
    const loadingElement = await screen.findByText(/Loading data.../i);
    expect(loadingElement).toBeInTheDocument();

    const searchInputElement = await screen.findByRole('textbox');
    userEvent.type(searchInputElement, 'hon');

    const listItems = await screen.findAllByRole('listitem');
    expect(listItems.length).toBe(6);
  });

  it('Should not render when no results', async () => {
    const searchInputElement = await screen.findByRole('textbox');

    userEvent.type(searchInputElement, 'honlss'); // type invalid surf spot

    const resultsContainerElement = screen.queryByRole('list');
    expect(resultsContainerElement).not.toBeInTheDocument();
  });
});
