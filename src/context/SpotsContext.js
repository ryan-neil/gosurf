import { createContext, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useLocalStorage } from '../hooks/useLocalStorage';

const SpotsContext = createContext({});

export const SpotsDataProvider = ({ children }) => {
	const { response } = useFetch('http://localhost:9001/spots'); // mock backend api
	const [spots, setSpots] = useLocalStorage('spots', response);

	// check if local spots data exists before setting spots state
	useEffect(() => {
		if (response) {
			setSpots(response);
		}
	}, [response]);

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
