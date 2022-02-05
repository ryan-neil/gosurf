import { createContext, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useLocalStorage } from '../hooks/useStorage';

const SpotsContext = createContext({});

export const SpotsDataProvider = ({ children }) => {
  const { data } = useFetch('http://localhost:9001/spots');
  const [spots, setSpots] = useLocalStorage('spots', data);

  // check if local spots data exists before setting spots state
  useEffect(() => {
    if (data) setSpots(data);
  }, [data]);

  return (
    <SpotsContext.Provider
      value={{
        spots,
      }}
    >
      {children}
    </SpotsContext.Provider>
  );
};

export default SpotsContext;
