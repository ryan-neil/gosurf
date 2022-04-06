import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// mock api
import mockData from '../../mocks/spotsMockData.json';
// helpers
import useDebounce from '../../hooks/useDebounce';
// styles
import {
  StyledSearch,
  StyledHeaderBackground,
  StyledSearchHeader,
  StyledSearchBody,
  StyledInputResults,
} from './Search.styled';
import { Container, StyledButton, StyledInput, SearchBarIcon } from '../../styles/Utils.styled';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const navigate = useNavigate();

  /**
   * Handle user search:
   * fetch api
   * filter for matching text (clean the users text input)
   * return filtered results back to client
   */
  const handleSearch = async (search) => {
    try {
      // const res = await fetch('/api/spots');
      // const data = await res.json();

      const filteredResults = mockData.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase().trim())
      );

      return filteredResults;
    } catch (err) {
      // console.error(err);
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
            <p>{result.name}</p>
            <p className="results-location">{`${result.location.county}, ${result.location.state}`}</p>
          </Link>
        </li>
      ))}
    </StyledInputResults>
  );

  return (
    <StyledSearch>
      <StyledHeaderBackground />
      <Container>
        {/* Header */}
        <StyledSearchHeader>
          {/* Input */}
          <StyledInput>
            <SearchBarIcon />
            <input
              type="text"
              placeholder="Search spot..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </StyledInput>
          {/* Button */}
          <StyledButton type="submit" onClick={() => navigate(-1)}>
            Cancel
          </StyledButton>
        </StyledSearchHeader>
        {/* Body */}
        <StyledSearchBody>{handleResults}</StyledSearchBody>
      </Container>
    </StyledSearch>
  );
};
