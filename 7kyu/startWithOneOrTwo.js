const obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};

const startWithOneOrTwo = (obj) => {
	const result = [];

	for (const objKey in obj) {
		const str = String(obj[objKey]);

		if (str.startsWith('1') || str.startsWith('2')) {
			result.push(Number(str))
		}
	}

	return result
};

console.log(startWithOneOrTwo(obj))