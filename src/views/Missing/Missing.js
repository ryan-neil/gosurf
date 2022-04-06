// Styles
import { Link } from 'react-router-dom';
import { Container, ButtonStyled } from '../../styles/Utils.styled';
import { MissingStyled } from './Missing.styled';

export const Missing = () => (
  <MissingStyled>
    <Container>
      <p>Hmm. We cannot find the page you are looking for.</p>
      <Link to="/">
        <ButtonStyled type="submit">Head back</ButtonStyled>
      </Link>
    </Container>
  </MissingStyled>
);
