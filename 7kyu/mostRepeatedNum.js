const arr = [3, 1, 4, 1, 2, 3, 3, 4, 4, 4, 5, 5];

const mostRepeatedNum = (arr) => {
	const map = new Map();

	for (const element of arr) {
		const count = (map.get(element) || 0) + 1

		map.set(element, count)
	}

	let max = 0;
	let result = null;

	for (const [key, value] of map) {
		if (value > max) {
			max = value;
			result = key
		}
	}

	return `${result} встречается ${max} раз`
};

console.log(mostRepeatedNum(arr))