import { useState } from 'react';
import { Link } from 'react-router-dom';
// api data
import { useFetch } from '../../hooks/useFetch';
import { useDebounce } from '../../hooks/useDebounce';
import mockSpots from '../../mocks/spotsMockData.json';
// components
import { Loading } from '../Loading';
// styles
import {
  StyledSearchBar,
  SearchBarIcon,
  StyledInputContainer,
  StyledInputResults,
} from './SearchBar.styled';

export const SearchBar = () => {
  // const { response, loading, error } = useFetch('api/spots');
  const [spots, setSpots] = useState(mockSpots);

  const [inputValue, setInputValue] = useState('');
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  /**
   * Handle user search
   * set input to show value of user search
   * get user search text
   * fetch spots api and filter for matching text (clean the users text input)
   * debounce results
   */
  const handleChange = (e) => {
    setInputValue(e.target.value);

    // fetch api

    setSearchText(e.target.value);
    const filteredResults = spots.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase().trim())
    );
    searchText === '' ? setSearchResults([]) : setSearchResults(filteredResults);
  };

  /**
   * Handle user selection
   * set input value once selected
   * reset search results (close dropdown)
   */
  const handleClick = (spot) => {
    setInputValue(`${spot.name}, ${spot.location.state}`);
    setSearchResults([]);
  };

  /**
   * Render the search results
   * need to add a prop for web results and mobile results to make the component reusable
   * <StyledInputResults web={web} mobile={mobile}>
   * handle input result logic and styles
   * handle redirect to Forecast page
   * handle render display
   */
  const handleResults = searchResults.length !== 0 && (
    <StyledInputResults>
      {searchResults.map((spot) => (
        <li key={spot.spot_id}>
          <Link to={`/forecast/${spot.slug}`} onClick={() => handleClick(spot)}>
            {`${spot.name}, ${spot.location.state}`}
          </Link>
        </li>
      ))}
    </StyledInputResults>
  );

  return (
    <StyledSearchBar>
      <StyledInputContainer>
        <SearchBarIcon />
        <input
          type="text"
          placeholder="Search spot..."
          value={inputValue}
          onChange={handleChange}
        />
      </StyledInputContainer>
      {handleResults}
    </StyledSearchBar>
  );
};
