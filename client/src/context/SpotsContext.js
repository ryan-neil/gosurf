import { createContext } from 'react';
import { useFetch } from '../hooks/useFetch';

const SpotsContext = createContext({});

export const SpotsDataProvider = ({ children }) => {
  // fetch mock backend api
  const { response, loading, error } = useFetch('http://localhost:9001/api/spots');

  return (
    <SpotsContext.Provider
      value={{
        response,
        loading,
        error
      }}
    >
      {children}
    </SpotsContext.Provider>
  );
};

export default SpotsContext;
