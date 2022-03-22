import PropTypes from 'prop-types';
import { createContext, useContext, useMemo } from 'react';
import { useFetch } from '../hooks/useFetch';

export const SpotsContext = createContext({});

const SpotsDataProvider = ({ children }) => {
  // fetch backend api (get all spots)
  const { response, loading, error } = useFetch('http://localhost:9001/api/spots');

  // memoize the full spots context value
  const spots = useMemo(
    () => ({
      response,
      loading,
      error,
    }),
    [response, loading, error]
  );

  return <SpotsContext.Provider value={spots}>{children}</SpotsContext.Provider>;
};

// prop types
SpotsDataProvider.propTypes = {
  children: PropTypes.node,
};

export default SpotsDataProvider;

// hook to use the SpotsContext
export const useSpotsContextAPI = () => {
  const context = useContext(SpotsContext);

  if (context === undefined) {
    throw new Error('Context must be used within a child Provider');
  }

  return context;
};
