import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Context API
import { useSpotsContextAPI } from '../../context/SpotsContext';
// Components
import { Loading } from '../Loading';
// Styles
import {
  StyledSearchBar,
  SearchBarIcon,
  StyledInputContainer,
  StyledInputResults,
} from './SearchBar.styled';

export const SearchBar = ({ mobile }) => {
  const [inputValue, setInputValue] = useState('');
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  // fetch API from context
  const { response, loading, error } = useSpotsContextAPI();

  // wait for response to be returned
  if (loading) return <Loading />;
  if (error) {
    return (
      <StyledSearchBar mobile={mobile}>
        <StyledInputContainer error>
          <input type="text" placeholder="Error fetching data" disabled />
        </StyledInputContainer>
      </StyledSearchBar>
    );
  }

  // handle user search
  const handleChange = (e) => {
    setInputValue(e.target.value);
    setSearchText(e.target.value);

    const filteredResults = response.filter((item) =>
      item.name.toLowerCase().includes(searchText.trim())
    );

    searchText === '' ? setSearchResults([]) : setSearchResults(filteredResults);
  };

  // handle user click
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

// prop types
SearchBar.propTypes = {
  mobile: PropTypes.bool,
};

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
  spot: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
  ).isRequired,
  handleClick: PropTypes.func,
};
