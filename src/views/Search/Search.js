import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
// components
import FetchLoading from '../../components/FetchLoading';
import FetchError from '../../components/FetchError';
// styles
import {
  StyledSearch,
  StyledHeaderBackground,
  StyledSearchHeader,
  StyledSearchBody,
  StyledInputResults,
} from './Search.styled';
import { Container, StyledButton, StyledInput, SearchBarIcon } from '../../styles/Utils.styled';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();

  // fetch spots API from react query
  const { isLoading, error, data } = useQuery('spotsData', () =>
    fetch('/api/spots').then((res) => res.json())
  );

  // mounted data checks
  if (isLoading) return <FetchLoading />;
  if (error) return <FetchError />;

  /**
   * Handle user search
   *
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
   *
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
        <StyledSearchHeader>
          <StyledInput>
            <SearchBarIcon />
            <input
              type="text"
              placeholder="Search spot..."
              value={inputValue}
              onChange={handleSearch}
            />
          </StyledInput>
          <StyledButton type="submit" onClick={() => navigate(-1)}>
            Cancel
          </StyledButton>
        </StyledSearchHeader>
        <StyledSearchBody>{handleResults}</StyledSearchBody>
      </Container>
    </StyledSearch>
  );
};

export default Search;
