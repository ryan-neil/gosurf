import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Components
import { Loading } from '../Loading';
import { ErrorIcon } from '../FetchError/FetchError.styled';
// Context
import { useSpotsContextAPI } from '../../context/SpotsContext';
// Styles
import { StyledSearchBar, StyledInputContainer, SearchBarIcon } from './SearchBar.styled';

export const SearchBar = ({ mobile }) => {
  // fetch backend spots API data
  const { response, loading, error } = useSpotsContextAPI();
  // set states
  const [inputValue, setInputValue] = useState('');
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // mounted response checks (if api data is null remove the SearchBar)
  // if (!response) return null;

  // mounted data checks
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <StyledSearchBar mobile={mobile}>
        <StyledInputContainer error>
          <ErrorIcon />
          <input type="text" placeholder="Error fetching data" disabled />
        </StyledInputContainer>
      </StyledSearchBar>
    );
  }

  const handleSearch = (e) => {
    // set the input value to users input
    setInputValue(e.target.value);
    // get users' searched word
    setSearchText(e.target.value);
    // filter for matching spots
    const filteredResults = response.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()));
    // update search state
    searchText === '' ? setSearchResults([]) : setSearchResults(filteredResults);
  };

  const handleClick = (spot) => {
    // set input value to clicked spot
    setInputValue(`${spot.name}, ${spot.location.state}`);
    // close the dropdown
    setSearchResults([]);
  };

  // loop through search results and render the element
  const results = searchResults.map((spot) => (
    <Link className="results-item" key={spot.spot_id} to={`/forecast/${spot.slug}`} onClick={() => handleClick(spot)}>
      <p>{`${spot.name}, ${spot.location.state}`}</p>
    </Link>
  ));

  return (
    <StyledSearchBar mobile={mobile}>
      <StyledInputContainer>
        <SearchBarIcon />
        <input type="text" placeholder="Search spot..." value={inputValue} onChange={handleSearch} />
      </StyledInputContainer>
      {searchResults.length !== 0 && <div className="results-container">{results}</div>}
    </StyledSearchBar>
  );
};

// prop types
SearchBar.propTypes = {
  mobile: PropTypes.bool,
};
