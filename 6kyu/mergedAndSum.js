const obj1 = {apples: 3, bananas: 2};
const obj2 = {apples: 5, oranges: 4};

const mergedAndSum = (obj1, obj2) => {
	return [obj1, obj2].reduce((acc, obj) => {
		const keys = Object.keys(obj);

		keys.forEach((key) => {
			acc[key] = (acc[key] || 0) + obj[key]
		})

		return acc
	}, {})
};
console.log(mergedAndSum(obj1, obj2))

// Ожидаемый результат: { apples: 8, bananas: 2, oranges: 4 }