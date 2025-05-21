const output = new Map([["a", 1], ["b", 2]]);

const changeKeyInMap = (input) => {
	return [...input.entries()].reduce((acc, [key, value]) => {
		acc[value] = key;
		
		return acc
	}, new Map())
};

console.log(changeKeyInMap(output))