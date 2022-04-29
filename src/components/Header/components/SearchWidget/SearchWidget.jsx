// Styled
import { Link } from 'react-router-dom';
import { SearchIcon } from './SearchWidget.styled';

export const SearchWidget = () => {
  return (
    <Link to="/search">
      <SearchIcon />
    </Link>
  );
};

export default SearchWidget;
