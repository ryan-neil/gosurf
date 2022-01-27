import { useState, useEffect, createContext } from 'react';

const SpotsContext = createContext({});

export const SpotsDataProvider = ({ children }) => {
	const [ spots, setSpots ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);

	// fetch surf spots from db
	useEffect(() => {
		const fetchSpots = async () => {
			const API_URL = 'http://localhost:9001/spots'; // mock json-server api
			setIsLoading(true);

			try {
				const res = await fetch(API_URL);
				const data = await res.json();

				// save data to local storage and set spots state
				localStorage.setItem('spotsData', JSON.stringify(data));
				// get local spots data
				const localSpotsData = JSON.parse(
					localStorage.getItem('spotsData')
				);

				// update state with local spots data
				setSpots(localSpotsData);
			} catch (err) {
				console.log(err);
			} finally {
				setIsLoading(false);
			}
		};
		fetchSpots();
	}, []);

	return (
		<SpotsContext.Provider value={{ spots, setSpots, isLoading }}>
			{children}
		</SpotsContext.Provider>
	);
};

export default SpotsContext;
