const mergeObjects = (obj1, obj2) => {
	return Object.keys(obj2).reduce((acc, key) => {
		acc[key] = (acc[key] || 0) + obj2[key];

		return acc;
	}, {...obj1})
};
console.log(mergeObjects({a: 10, b: 5}, {a: 3, c: 8}));