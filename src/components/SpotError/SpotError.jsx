import { StyledError, ErrorIcon } from './SpotError.styled';

// Sorry, error fetching {name} data...{error}

const SpotError = () => {
  return (
    <StyledError>
      <p>
        <ErrorIcon />
        Oops, the spot you're looking for does not exist.
      </p>
    </StyledError>
  );
};

export default SpotError;
