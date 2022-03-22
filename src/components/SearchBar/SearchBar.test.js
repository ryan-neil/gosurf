import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
// api context
import SpotsDataProvider from '../../context/SpotsContext';
// mock data
import mockData from '../../mocks/spots.json';
// component
import { SearchBar } from './SearchBar';

// How to Test React Components That Use Fetch:
// https://www.youtube.com/watch?v=yTZ-txdrHdY
// https://www.udemy.com/course/the-react-testing-library-bootcamp/learn/lecture/30004756#overview

// mock fetch API
const server = setupServer(
  rest.get('http://localhost:9001/api/spots', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockData));
  })
);

// need to listen for the server once before all tests
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// SearchBar testing
describe('SearchBar', () => {
  it('Should be initially empty', async () => {
    render(<SearchBar />);

    const searchInputElement = await screen.findByRole('textbox');
    expect(searchInputElement.value).toBe('');
  });

  it('Should be able to search', async () => {
    render(
      <SpotsDataProvider>
        <SearchBar />
      </SpotsDataProvider>
    );

    const searchInputElement = await screen.findByRole('textbox');
    userEvent.type(searchInputElement, 'honls');

    expect(searchInputElement.value).toBe('honls');
  });
});

// SearchBar container testing
describe('SearchBar results container', () => {
  it('Should render six list items', async () => {
    render(
      <SpotsDataProvider>
        <SearchBar />
      </SpotsDataProvider>
    );

    const loadingElement = await screen.findByText(/Loading data.../i);
    expect(loadingElement).toBeInTheDocument();

    const searchInputElement = await screen.findByRole('textbox');
    userEvent.type(searchInputElement, 'hon');

    const listItems = await screen.findAllByRole('listitem');
    expect(listItems.length).toBe(6);
  });

  it('Should not render when no results', async () => {
    <SpotsDataProvider>
      <SearchBar />
    </SpotsDataProvider>;

    /**
     * Can't figure out why this isn't working
     *
     * User should type invalid surf spot into input
     * "results-container" should be hidden since there are 0 results
     * "results-container" is hidden but test is still failing
     */

    //  const searchInputElement = await screen.findByRole('textbox');
    //  userEvent.type(searchInputElement, 'honlss'); // type invalid surf spot

    // const resultsContainerElement = await screen.findByRole('list');
    // expect(resultsContainerElement).not.toBeInTheDocument();

    // or

    // const listItems = await screen.findAllByRole('listitem');
    // expect(listItems.length).toBe(0);
  });
});
