// get average of an array
export const avgOfArray = (arr) => {
	const sum = arr.reduce((acc, cur) => acc + cur);
	return sum / arr.length;
};
