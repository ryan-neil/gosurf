// tutorial: https://www.youtube.com/watch?v=dH6i3GurZW8

import { useEffect, useState } from 'react';

export const useFetch = (url) => {
	const [ data, setData ] = useState(null);
	const [ fetchError, setFetchError ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(false);

	useEffect(
		() => {
			let isMounted = true;

			const fetchData = async () => {
				setIsLoading(true);
				try {
					const res = await fetch(url);
					const apiData = await res.json();
					if (isMounted) {
						setData(apiData);
						setFetchError(null);
					}
				} catch (err) {
					if (isMounted) {
						setFetchError(err.message);
						setData(null);
					}
				} finally {
					setIsLoading(false);
				}
			};
			fetchData();

			const cleanUp = () => {
				isMounted = false;
			};

			return cleanUp;
		},
		[ url ]
	);

	return {
		data,
		fetchError,
		isLoading
	};
};
