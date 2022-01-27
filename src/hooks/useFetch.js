import { useEffect, useState } from 'react';

export const useFetch = (options) => {
	const [ data, setData ] = useState(null);
	const [ fetchError, setFetchError ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(false);

	useEffect(
		() => {
			// console.log('useFetch useEffect');
			let isMounted = true;

			const fetchData = async () => {
				setIsLoading(true);
				try {
					const res = await fetch(options.url);
					if (isMounted) {
						const apiData = await res.json();
						setData(apiData);
						setFetchError(null);
					}
				} catch (err) {
					if (isMounted) {
						setFetchError(err.message);
						setData(null);
					}
				} finally {
					// isMounted && setTimeout(() => setIsLoading(false), 3000);
					setIsLoading(false);
				}
			};
			fetchData();
		},
		[ options.url ]
	);

	return {
		data,
		fetchError,
		isLoading
	};
};
