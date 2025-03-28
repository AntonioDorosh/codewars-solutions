const obj = { a: 1, b: 2, c: 3 };
const allowedKeys = ["a", "c"];

const filteredByKey = (obj, keys) => {
	const entries = Object.entries(obj).filter((el) => keys.includes(el[0]))

	return Object.fromEntries(entries)
};

console.log(filteredByKey(obj, allowedKeys))