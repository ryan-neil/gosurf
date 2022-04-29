import PropTypes from 'prop-types';
import { StyledError, ErrorIcon } from './FetchError.styled';

const FetchError = ({ name }) => {
  return (
    <StyledError>
      <p>
        <ErrorIcon />
        Error fetching {name} data. Try refreshing the page or try again later.
      </p>
    </StyledError>
  );
};

FetchError.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FetchError;
