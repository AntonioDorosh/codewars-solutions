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
	const flattenObjHandler = (currentValue, currentPath) => {
		if (typeof currentValue !== 'object' || currentValue === null) {
			return [{
				path: currentPath,
				value: currentValue
			}]
		}

		return Object.keys(currentValue).reduce((acc, key) => {
			const newPath = currentPath ? `${currentPath}.${key}` : key;
			const nested = flattenObjHandler(currentValue[key], newPath)

			return acc.concat(nested)
		}, [])
	};

	return flattenObjHandler(obj, '')
};

console.log(flattenObj(data))