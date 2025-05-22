const obj = { a: 1, b: { c: 2, d: { e: 3 } } };

const extractKeys = (obj) => {
	return Object.keys(obj).reduce((acc, key) => {
		acc.push(key)

		const value = obj[key];

		if (typeof value === 'object' && value !== null) {
			acc.push(...extractKeys(value))
		}

		return acc
	}, [])
};

console.log(extractKeys(obj))