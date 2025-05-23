const result = [1, 2, 3, 4, 5, 6, 7];

const chunkArr = (arr, size, result = []) => {
	if (arr.length === 0) return result;

	const chunk = arr.slice(0, size);
	result.push(chunk)

	const remainingArr = arr.slice(size);

	return chunkArr(remainingArr, size, result)
};

console.log(chunkArr(result, 3))