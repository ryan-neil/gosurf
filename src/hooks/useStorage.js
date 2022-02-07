import { useCallback, useState, useEffect } from 'react';

const useStorage = (key, defaultValue, storageObject) => {
	// set our state, by default we're going to try and access the state inside of either local or session storage
	const [value, setValue] = useState(() => {
		// save the storage object to a variable
		const jsonValue = storageObject.getItem(key);
		// check if the storage object exists, if it does, we will return that as our value
		if (jsonValue !== null) return JSON.parse(jsonValue);

		// first, we check to make sure it's a function because we want this to work exactly like normal setState
		// if there is no state in local storage, we will use the default value being passed in
		if (typeof initialValue === 'function') {
			return defaultValue();
		}
		return defaultValue;
	});

	// call a useEffect to run anytime our "key", "value", or "storageObject" changes (main thing is the "value" change)
	useEffect(() => {
		// if our value changes, we check if the value is undefined, if true we want to remove it from the storage object
		if (value === undefined) return storageObject.removeItem(key);
		// if the value is defined, we set our new value inside of storage
		return storageObject.setItem(key, JSON.stringify(value));
	}, [key, value, storageObject]);

	const remove = useCallback(() => {
		setValue(undefined);
	}, []);

	return [value, setValue, remove];
};

export const useLocalStorage = (key, defaultValue) =>
	useStorage(key, defaultValue, window.localStorage);

export const useSessionStorage = (key, defaultValue) =>
	useStorage(key, defaultValue, window.sessionStorage);
