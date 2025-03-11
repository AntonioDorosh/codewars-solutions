const words = ["apple", "banana", "apricot", "cherry", "blueberry", "carrot"];

const groupByFirstChar = (arr) => {
	const map = new Map();

	for (const element of arr) {
		const key = element[0].toLowerCase();

		if (!map.has(key)) {
			map.set(key, [])
		}

		map.get(key).push(element)
	}

	return map
};

console.log(groupByFirstChar(words))