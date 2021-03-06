import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { StyledError, ErrorIcon } from './SpotError.styled';

// Sorry, error fetching {name} data...{error}

const SpotError = () => {
  const navigate = useNavigate();

  // navigate to home page after 4 seconds
  useEffect(() => {
    setTimeout(() => navigate('/'), 4000);
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

export default SpotError;
