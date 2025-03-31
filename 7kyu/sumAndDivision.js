const arr = [1, 2, 3, 4, 5, 6];

const sumArrays = (arr) => arr.reduce((acc, num) => acc + num, 0);

const sumAndDivision = (arr) => {
	const half = Math.ceil(arr.length / 2);
	const firstHalf = arr.slice(0, half);
	const rest = arr.slice(half)

	return sumArrays(firstHalf) / sumArrays(rest)
};

console.log(sumAndDivision(arr))