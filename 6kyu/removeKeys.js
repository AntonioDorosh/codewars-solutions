const input = { a: 1, b: 2, c: { d: 3, e: 4 } };
const keysToRemove = ['b', 'd'];

const removeKeys = (obj, keysToRemove) => {
	if (typeof obj !== 'object' || obj === null) return obj;

	return Object.entries(obj).reduce((acc, [key, value]) => {
		if (keysToRemove.includes(key)) return acc;

		acc[key] = removeKeys(value, keysToRemove)

		return acc
	}, Array.isArray(obj) ? [] : {})
};

console.log(removeKeys(input, keysToRemove))