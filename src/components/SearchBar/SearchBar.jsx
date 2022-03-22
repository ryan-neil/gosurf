import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Context
import { useSpotsContextAPI } from '../../context/SpotsContext';
// Components
import { Loading } from '../Loading';
// Styles
import { StyledSearchBar, StyledInputContainer, SearchBarIcon, StyledInputResults } from './SearchBar.styled';
import { ErrorIcon } from '../FetchError/FetchError.styled';

export const SearchBar = ({ mobile }) => {
  // set states
  const [inputValue, setInputValue] = useState('');
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  // fetch API from context
  const { response, loading, error } = useSpotsContextAPI();

  // mounted data checks
  if (loading) return <Loading />;
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

  const handleChange = (e) => {
    // set the input value to users input
    setInputValue(e.target.value);
    // get users' searched word
    setSearchText(e.target.value);
    // filter for matching spots
    const filteredResults = response.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase().trim())
    );
    // update search state
    searchText === '' ? setSearchResults([]) : setSearchResults(filteredResults);
  };

  const handleClick = (spot) => {
    // set input value to clicked spot
    setInputValue(`${spot.name}, ${spot.location.state}`);
    // close the dropdown
    setSearchResults([]);
  };

  // render search results
  const handleResults = searchResults.length !== 0 && (
    <StyledInputResults>
      {searchResults.map((spot) => (
        <InputResult key={spot.spot_id} spot={spot} handleClick={handleClick} />
      ))}
    </StyledInputResults>
  );

  return (
    <StyledSearchBar mobile={mobile}>
      <StyledInputContainer>
        <SearchBarIcon />
        <input type="text" placeholder="Search spot..." value={inputValue} onChange={handleChange} />
      </StyledInputContainer>
      {handleResults}
    </StyledSearchBar>
  );
};

SearchBar.propTypes = { mobile: PropTypes.bool };

// InputResult component
const InputResult = ({ spot, handleClick }) => {
  return (
    <li>
      <Link to={`/forecast/${spot.slug}`} onClick={() => handleClick(spot)}>
        {`${spot.name}, ${spot.location.state}`}
      </Link>
    </li>
  );
};

InputResult.propTypes = {
  spot: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])).isRequired,
  handleClick: PropTypes.func,
};
