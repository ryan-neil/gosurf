// ** Currently not in use **

import { useEffect, useState } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, options);
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        if (isMounted) {
          const json = await res.json();
          setData(json);
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

    // clean up function
    return () => {
      isMounted = false;
    };
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
};
