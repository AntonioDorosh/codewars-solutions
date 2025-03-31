const str = '023m0df0dfg0';

const getIndexesOfZeroes = (str, target) => {
	const result = [];
	const arr = str.split('');

	arr.forEach((el, index) => {
		if (el === target) {
			result.push(index)
		}
	})

	return result
};

console.log(getIndexesOfZeroes(str, '0'))