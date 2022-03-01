import { StyledError, ErrorIcon } from './SpotError.styled';

// Sorry, error fetching {name} data...{error}

const SpotError = () => {
  return (
    <StyledError>
      <h3>
        <ErrorIcon />
        Oops, the spot you're looking for does not exist.
      </h3>
    </StyledError>
  );
};

export default SpotError;
