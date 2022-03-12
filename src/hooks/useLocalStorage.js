import { useState, useEffect } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      // check if data is already in local storage
      currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
      // console.log('Data already there!');
    } catch (error) {
      // if no data, set local storage with data
      // console.log('Added to local storage!');
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
