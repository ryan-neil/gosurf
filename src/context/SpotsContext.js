import { createContext, useEffect, useMemo } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useLocalStorage } from '../hooks/useLocalStorage';

const SpotsContext = createContext({});

export const SpotsDataProvider = ({ children }) => {
  const { response } = useFetch('http://localhost:9001/spots'); // mock backend api
  const [spots, setSpots] = useLocalStorage('spots', response);

  // check if local spots data exists before setting spots state
  // Bug: This might not be working as expected...
  useEffect(() => {
    if (response) {
      setSpots(response);
    }
  }, [response]);

  // https://stackoverflow.com/questions/71233273/the-object-passed-as-the-value-prop-to-the-context-provider-changes-every-render
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
  // One way to resolve this issue may be to wrap the value in a useMemo(). If it's a function then useCallback() can be used as well.
  // If you expect the context to be rerun on each render, then consider adding a comment/lint supression explaining why.
  // const spotsProvider = useMemo(() => ({ spots }), [spots]);
  // <SpotsContext.Provider value={{foo}}></SpotsContext.Provider>

  return (
    <SpotsContext.Provider
      value={{
        spots
      }}
    >
      {children}
    </SpotsContext.Provider>
  );
};

export default SpotsContext;
