import { useCallback, useEffect, useRef } from 'react';

export const useTimeout = (callback, delay) => {
	// if callback changes, useTimeout will pass a new function every time the component renders which technically means its going to be different
	const callbackRef = useRef(callback); // this allows the callback to stay the same when it changes
	const timeoutRef = useRef();

	useEffect(
		() => {
			callbackRef.current = callback; // every time our callback changes we're updating our callbackRef. this prevents us from having to re-update the timer every time the callback changes, otherwise if we update the component state, thats going to update timeout function and that's going to update our timing which we don't want
		},
		[ callback ]
	);

	// set function
	const set = useCallback(
		() => {
			timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
		},
		[ delay ]
	);

	// clear function
	const clear = useCallback(() => {
		timeoutRef.current && clearTimeout(timeoutRef.current);
	}, []);

	// every time the delay, set, or clear changes we run this useEffect
	useEffect(
		() => {
			set();
			return clear;
		},
		[ delay, set, clear ]
	);

	// reset function
	const reset = useCallback(
		() => {
			clear();
			set();
		},
		[ clear, set ]
	);

	return {
		reset,
		clear
	};
};
