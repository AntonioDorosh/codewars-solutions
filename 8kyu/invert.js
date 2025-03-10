const invert = (obj) => {
	return Object.entries(obj).reduce((acc, [key, value]) => {
		acc[value] = key;

		return acc
	}, {})
};
console.log(invert({a: "apple", b: "banana"}));