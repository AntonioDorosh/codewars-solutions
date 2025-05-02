const data = {
	user: {
		name: 'Alice',
		address: {
			city: 'Wonderland',
			zip: 12345
		}
	}
};

const flattenObj = (obj) => {
	const traverse = (value, path) => {
		if (typeof value !== 'object' || value === null) {
			return [{path, value}]
		}

		return Object.keys(value).reduce((acc, key) => {
			const newPath = path ? `${path}.${key}` : key;
			const nested = traverse(value[key], newPath);

			return acc.concat(nested)
		}, [])
	};

	return traverse(obj, '')
};

console.log(flattenObj(data))