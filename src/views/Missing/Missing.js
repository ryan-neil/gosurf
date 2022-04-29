// Styles
import { Link } from 'react-router-dom';
import { Container, StyledButton } from '../../styles/Utils.styled';
import { MissingStyled } from './Missing.styled';

const Missing = () => (
  <MissingStyled>
    <Container>
      <p>Hmm. We cannot find the page you are looking for.</p>
      <Link to="/">
        <StyledButton type="submit">Head back</StyledButton>
      </Link>
    </Container>
  </MissingStyled>
);

export default Missing;
