import PropTypes from 'prop-types';
import { StyledError, ErrorIcon } from './FetchError.styled';

// Sorry, error fetching {name} data...{error}

export const FetchError = ({ name, error }) => {
  return (
    <StyledError>
      <p>
        <ErrorIcon />
        Error fetching {name} data. Please try again later ({error}).
      </p>
    </StyledError>
  );
};

FetchError.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};
