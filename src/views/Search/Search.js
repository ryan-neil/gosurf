import { useNavigate } from 'react-router-dom';
import { SearchBar } from '../../components/SearchBar';
// styles
import { SearchStyled, SearchHeaderStyled, SearchBodyStyled } from './Search.styled';
import { Container, ButtonStyled } from '../../styles/Utils.styled';

export const Search = () => {
  const navigate = useNavigate();

  return (
    <SearchStyled>
      <Container>
        {/* Header */}
        <SearchHeaderStyled>
          <SearchBar />
          <ButtonStyled type="submit" onClick={() => navigate(-1)}>
            Cancel
          </ButtonStyled>
        </SearchHeaderStyled>
        {/* Body */}
        <SearchBodyStyled>
          <p>Search body</p>
        </SearchBodyStyled>
      </Container>
    </SearchStyled>
  );
};
