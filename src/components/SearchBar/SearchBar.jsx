import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import SpotsContext from '../../context/SpotsContext';
// Styles
import { StyledSearchBar, SearchBarIcon } from './SearchBar.styled';

const SearchBar = ({ mobile }) => {
  const { spots } = useContext(SpotsContext);
  const [inputValue, setInputValue] = useState('');
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    // set the input value to users input
    setInputValue(e.target.value);
    // get users' searched word
    setSearchText(e.target.value);
    // filter for matching spots
    const filteredResults = spots.filter((spot) =>
      spot.name.toLowerCase().includes(searchText.toLowerCase())
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

  // loop through search results and render the element
  const results = searchResults.map((spot) => (
    <Link
      key={spot.id}
      className="results-item"
      to={`/forecast/${spot.slug}`}
      onClick={() => handleClick(spot)}
    >
      <p>{`${spot.name}, ${spot.location.state}`}</p>
    </Link>
  ));

  return (
    <StyledSearchBar mobile={mobile}>
      <div className="input-container">
        <SearchBarIcon />
        <input
          type="text"
          placeholder="Search spot..."
          value={inputValue}
          onChange={handleSearch}
        />
      </div>
      {searchResults.length !== 0 && <div className="results-container">{results}</div>}
    </StyledSearchBar>
  );
};

export default SearchBar;
