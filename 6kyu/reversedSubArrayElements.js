const arr = [1, 2, 3, 4, 5, 6];

const reversedElements = (arr) => arr.reduce((acc, currentValue, idx) => idx % 2 === 0 ? [...acc, arr.slice(idx, idx + 2)] : acc, []);

const reversedSubArrayElements = (arr) => {
	const result = reversedElements(arr);

	return result.map((pair) => pair.reverse());
};

console.log(reversedSubArrayElements(arr))