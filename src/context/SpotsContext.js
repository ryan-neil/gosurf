import { createContext, useContext } from 'react';
import { useFetch } from '../hooks/useFetch';

const SpotsContext = createContext();

export const SpotsDataProvider = ({ children }) => {
  // fetch backend api (get all spots)
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

export default SpotsDataProvider;

// hook to use the SpotsContext
export const useSpotsContextAPI = () => {
  const context = useContext(SpotsContext);

  if (context === undefined) {
    throw new Error('Context must be used within a child Provider');
  }

  return context;
};
