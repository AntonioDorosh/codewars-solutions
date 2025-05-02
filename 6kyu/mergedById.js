const a = [
	{ id: 1, name: 'Alice', age: 25 },
	{ id: 2, name: 'Bob', age: 30 }
];
const b = [
	{ id: 1, age: 26 },
	{ id: 3, name: 'Charlie', age: 35 }
];

const mergedById = (arr1, arr2) => {
	return [...arr1, ...arr2].reduce((merged, currentValue) => {
	  const indx = merged.findIndex(({id}) => id === currentValue.id);

		if (indx !== -1) {
			merged[indx] = {...merged[indx], ...currentValue}
		} else {
			merged.push(currentValue)
		}

		return merged
	}, []);
};

console.log(mergedById(a, b))