import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
// Components
import Loading from '../Loading/Loading';
import { ErrorIcon } from '../FetchError/FetchError.styled';
// Context
import SpotsContext from '../../context/SpotsContext';
// Styles
import { StyledSearchBar, StyledInputContainer, SearchBarIcon } from './SearchBar.styled';

const SearchBar = ({ mobile }) => {
  // fetch spots API data
  const { response, error, loading } = useContext(SpotsContext);
  // set states
  const [inputValue, setInputValue] = useState('');
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // mounted data checks (if api response is null remove the SearchBar)
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
    const filteredResults = response.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
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
      className="results-item"
      key={spot.id}
      to={`/forecast/${spot.slug}`}
      onClick={() => handleClick(spot)}
    >
      <p>{`${spot.name}, ${spot.location.state}`}</p>
    </Link>
  ));

  return (
    <StyledSearchBar mobile={mobile}>
      <StyledInputContainer>
        <SearchBarIcon />
        <input
          type="text"
          placeholder="Search spot..."
          value={inputValue}
          onChange={handleSearch}
        />
      </StyledInputContainer>
      {searchResults.length !== 0 && <div className="results-container">{results}</div>}
    </StyledSearchBar>
  );
};

export default SearchBar;
