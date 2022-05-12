import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
// api
import * as api from '../../services/spotApi';
// components
import FetchLoading from '../FetchLoading';
import FetchError from '../FetchError';
// styles
import { StyledSearchBar, StyledInputResults } from './SearchBar.styled';
import { SearchBarIcon, StyledInput } from '../../styles/Utils.styled';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  // fetch spots API from react query
  const { isLoading, error, data } = useQuery('spotsData', api.getSpots);

  // mounted data checks
  if (isLoading) return <FetchLoading />;
  if (error) return <FetchError />;

  /**
   * Handle user search
   */
  const handleSearch = (e) => {
    // set the input value to users input
    setInputValue(e.target.value);
    // get users' searched word
    setSearchText(e.target.value);
    // filter for matching spots
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase().trim())
    );
    // update search state
    searchText === '' ? setSearchResults([]) : setSearchResults(filteredResults);
  };

  /**
   * Handle user selection
   */
  const handleClick = (result) => {
    // set input value to clicked result
    setInputValue(`${result.name}, ${result.location.state}`);
    // close the dropdown
    setSearchResults([]);
  };

  /**
   * Render the search results:
   * set input result logic and styles
   * handle redirect to Forecast page on user selection
   */
  const handleResults = searchResults.length !== 0 && (
    <StyledInputResults>
      {searchResults.map((result) => (
        <li key={result.spot_id}>
          <Link to={`/forecast/${result.slug}`} onClick={() => handleClick(result)}>
            {`${result.name}, ${result.location.state}`}
          </Link>
        </li>
      ))}
    </StyledInputResults>
  );

  return (
    <StyledSearchBar>
      <StyledInput>
        <SearchBarIcon />
        <input
          type="text"
          placeholder="Search spot..."
          value={inputValue}
          onChange={handleSearch}
        />
      </StyledInput>
      {handleResults}
    </StyledSearchBar>
  );
};

export default SearchBar;
