const arr = [1, 2, 3, 4, 5, 6, 7];


const splittingArr = (arr, size) => {
	const result = [];

	for (let i = 0; i < arr.length; i += size) {
		const sliced = arr.slice(i, i + size);

		result.push(sliced)
	}

	return result
};
console.log(splittingArr(arr, 3))
// Ожидаемый результат: [[1, 2, 3], [4, 5, 6], [7]]