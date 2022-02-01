import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import SpotsContext from '../context/SpotsContext';
// import { useDebounce } from '../hooks/useDebounce';
// styles
import styled from 'styled-components';
import { Search } from '@styled-icons/material';
// SearchBar
const StyledSearchBar = styled.div`
	.input-container {
		background-color: ${({ theme }) => theme.colors.inputBG};
		display: flex;
		align-items: center;
		height: 2.5rem;
		padding: 0.25rem 1rem;
		border-radius: ${({ theme }) => theme.styles.borderRadiusMd};
		box-shadow: ${({ theme }) => theme.colors.boxShadowInset};
		input {
			color: ${({ theme }) => theme.colors.paragraph};
			font-size: .9rem;
			letter-spacing: .025em;
			text-align: left;
			background: transparent;
			border: none;
			/* outline: none; */
			&::placeholder {
				color: ${({ theme }) => theme.colors.paragraphLight};
			}
		}
	}
	.results-container {
		position: absolute;
		margin-top: 5px;
		width: auto;
		width: 225px;
		height: auto;
		max-height: 300px;
		font-size: 0.9rem;
		background-color: ${({ theme }) => theme.colors.primaryBG};
		border: 1px solid ${({ theme }) => theme.colors.border};
		border-radius: ${({ theme }) => theme.styles.borderRadiusMd};
		overflow: hidden;
		overflow-y: auto;
		/* Hide scrollbar */
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
		&::-webkit-scrollbar {
			display: none; /* Chrome, Safari and Opera */
		}
		.results-item {
			width: 100%;
			height: 50px;
			display: flex;
			align-items: center;
			padding: 0 1rem;
			color: ${({ theme }) => theme.colors.paragraph};
			&:hover {
				background-color: ${({ theme }) => theme.colors.secondaryBG};
			}
		}
	}
	/* Responsive Queries */
	@media (max-width: ${({ theme }) => theme.mobile.width}) {
		display: none;
	}
`;
// SearchBar Icon
const SearchBarIcon = styled(Search)`
  color: ${({ theme }) => theme.colors.paragraphLight};
  width: 1rem;
  margin-right: .5rem;
`;

const SearchBar = () => {
	const { spots } = useContext(SpotsContext);
	const [ inputValue, setInputValue ] = useState('');
	const [ searchText, setSearchText ] = useState('');
	const [ searchResults, setSearchResults ] = useState([]);

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
		searchText === ''
			? setSearchResults([])
			: setSearchResults(filteredResults);
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
		<StyledSearchBar>
			<div className="input-container">
				<SearchBarIcon />
				<input
					type="text"
					placeholder="Search spot"
					value={inputValue}
					onChange={handleSearch}
				/>
			</div>
			{searchResults.length !== 0 && (
				<div className="results-container">{results}</div>
			)}
		</StyledSearchBar>
	);
};

export default SearchBar;
