import { createContext, useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

const SpotsContext = createContext({});

export const SpotsDataProvider = ({ children }) => {
	const [ spots, setSpots ] = useState([]);

	// fetch all surf spots hook
	const { data } = useFetch('http://localhost:9001/spots');
	// add all spots to local storage
	localStorage.setItem('spotsData', JSON.stringify(data));

	// update spots state
	useEffect(() => {
		setSpots(data);
	}, []);

	// get all spots from local storage
	const localSpotsData = JSON.parse(localStorage.getItem('spotsData'));

	return (
		<SpotsContext.Provider
			value={{
				localSpotsData
			}}
		>
			{children}
		</SpotsContext.Provider>
	);
};

export default SpotsContext;

// local storage: https://stackoverflow.com/questions/62105880/react-context-api-vs-local-storage

// check if spots data exists in local storage
// if (localStorage.getItem('spotsData') !== null) {
// 	console.log(`Spots data exists`);

// 	// get all spots from local storage
// 	const localSpotsData = JSON.parse(localStorage.getItem('spotsData'));
// 	// set spots state to local storage data
// 	setSpots(localSpotsData);
// } else {
// 	console.log(`Spots data not found`);

// 	// fetch all surf spots
// 	const { data: spotsData } = useFetch('http://localhost:9001/spots');
// 	// add all spots to local storage
// 	localStorage.setItem('spotsData', JSON.stringify(spotsData));
// 	// get all spots from local storage
// 	const localSpotsData = JSON.parse(localStorage.getItem('spotsData'));
// 	// set spots state to local storage data
// 	setSpots(localSpotsData);
// }
