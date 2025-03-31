const arr = [1, 2, 3, 4, 5, 6];

const sumFirstOfHalfNums = (arr) => {
	const half = Math.ceil(arr.length / 2);
	const firstHalf = arr.slice(0, half);

	return firstHalf.reduce((acc, num) => acc + num, 0)
};

console.log(sumFirstOfHalfNums(arr))