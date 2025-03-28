const obj = { a: 1, b: null, c: undefined, d: 4 };

const removeNullAndUndefined = (obj) => {
	const entries = Object.entries(obj).filter(([_, value]) => value ?? false);

	return Object.fromEntries(entries)
};

console.log(removeNullAndUndefined(obj))