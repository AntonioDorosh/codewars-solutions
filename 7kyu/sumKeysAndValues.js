const obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};

const sumHelper = (numbers) => numbers.reduce((total, num) => total + Number(num), 0);

const sumKeysAndValues = (obj) => {
	const keys = sumHelper(Object.keys(obj));
	const values = sumHelper(Object.values(obj));

	return keys / values
};

console.log(sumKeysAndValues(obj)) // 0.375