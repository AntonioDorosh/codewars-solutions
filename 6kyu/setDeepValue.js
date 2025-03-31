const obj = {};

const setDeepValue = (obj, path, value) => {
	return path.split('.').reduceRight((acc, key) => ({[key]: acc}), value)
};

const result = setDeepValue(obj, 'a.b.c', 42);

console.log(result)