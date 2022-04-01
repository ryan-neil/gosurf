import { useEffect, useState } from 'react';

export const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, options);
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        if (isMounted) {
          const data = await res.json();
          setResponse(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setResponse(null);
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
    response,
    loading,
    error,
  };
};
