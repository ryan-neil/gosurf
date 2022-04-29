import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// helpers
import useDebounce from '../../hooks/useDebounce';
// styles
import { StyledSearchBar, StyledInputResults } from './SearchBar.styled';
import { SearchBarIcon, StyledInput } from '../../styles/Utils.styled';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  /**
   * Handle user search:
   * fetch api
   * filter for matching text (clean the users text input)
   * return filtered results back to client
   */
  const handleSearch = async (search) => {
    try {
      const res = await fetch('/api/spots');
      const data = await res.json();

      const filteredResults = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase().trim())
      );

      return filteredResults;
    } catch (err) {
      throw new Error('Search Error: ', err);
    }
  };

  /**
   * The effect for the api:
   * check for user searching and call handle search logic and set the search results
   * if no results close the dropdown
   * dependency array: only call effect if debounced search term changes
   */
  useEffect(() => {
    if (debouncedSearchTerm) {
      handleSearch(debouncedSearchTerm).then((data) => {
        setResults(data);
      });
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  /**
   * Render the search results:
   * set input result logic and styles
   * handle redirect to Forecast page on user selection
   */
  const handleResults = results.length !== 0 && (
    <StyledInputResults>
      {results.map((result) => (
        <li key={result.spot_id}>
          <Link to={`/forecast/${result.slug}`} onClick={() => setResults([])}>
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
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </StyledInput>
      {handleResults}
    </StyledSearchBar>
  );
};

export default SearchBar;
