import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { StyledError, ErrorIcon } from './SpotError.styled';

// Sorry, error fetching {name} data...{error}

export const SpotError = () => {
  const navigate = useNavigate();

  // navigate to home page after 2 seconds
  useEffect(() => {
    setTimeout(() => navigate('/'), 2000);
  }, []);

  return (
    <StyledError>
      <h3>
        <ErrorIcon />
        Oops, the spot you're looking for does not exist.
      </h3>
    </StyledError>
  );
};
