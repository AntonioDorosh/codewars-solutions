const obj = {};

const setDeepValue = (obj, path, value) => {
	const keys = path.split('.');
	const lastKey = keys.pop();

	keys.reduce((acc, key) => {
		if (!acc[key]) {
			acc[key] = {};
		}

		return acc[key]
	}, obj)[lastKey] = value

	return obj
};

const result = setDeepValue(obj, 'a.b.c', 42);

console.log(result)