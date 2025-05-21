const map1 = new Map([['a', 2], ['b', 3]]);
const map2 = new Map([['a', 4], ['c', 5]]);
// Задача: Верни Map: { a → 6, b → 3, c → 5 }

const mergeAndSumMaps = (map1, map2) => {
	const result = new Map();

	for (const [key, value] of map1) {
		result.set(key, value)
	}

	for (const [key, value] of map2) {
		if (result.has(key)) {
			const existingValue = result.get(key);
			result.set(key, existingValue + value)
		} else {
			result.set(key, value)
		}
	}
	
	return result
};

console.log(mergeAndSumMaps(map1, map2));