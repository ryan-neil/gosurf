import { createContext } from 'react';
import { useFetch } from '../hooks/useFetch';

const SpotsContext = createContext({});

export const SpotsDataProvider = ({ children }) => {
	// fetch all surf spots
	const { data: spotsData } = useFetch({
		url: 'http://localhost:9001/spots'
	});
	// add all spots to local storage
	localStorage.setItem('spotsData', JSON.stringify(spotsData));

	return (
		<SpotsContext.Provider
			value={{
				spotsData
			}}
		>
			{children}
		</SpotsContext.Provider>
	);
};

export default SpotsContext;
