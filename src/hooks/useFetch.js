// tutorial: https://www.youtube.com/watch?v=dH6i3GurZW8

import { useEffect, useState } from 'react';

export const useFetch = (url, options = {}, dependencies = []) => {
	const [ data, setData ] = useState(null);
	const [ error, setError ] = useState(null);
	const [ loading, setLoading ] = useState(false);

	// console.log(options);

	useEffect(() => {
		let isMounted = true;

		const fetchData = async () => {
			setLoading(true);
			try {
				const res = await fetch(url, options);
				if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
				const apiData = await res.json();
				if (isMounted) {
					setData(apiData);
					setError(null);
				}
			} catch (err) {
				if (isMounted) {
					setError(err.message);
					setData(null);
				}
			} finally {
				setLoading(false);
			}
		};
		fetchData();

		const cleanUp = () => {
			isMounted = false;
		};

		return cleanUp;
	}, dependencies);

	return {
		data,
		error,
		loading
	};
};
