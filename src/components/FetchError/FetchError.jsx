import { StyledError, ErrorIcon } from './FetchError.styled';

// Sorry, error fetching {name} data...{error}

const FetchError = ({ name, error }) => {
  return (
    <StyledError>
      <p>
        <ErrorIcon />
        Error fetching {name} data. Please try again later ({error}).
      </p>
    </StyledError>
  );
};

export default FetchError;
