const arraySum = (arr) => {
	return arr.toString().split(',')
		.map((n) => parseFloat(n))
		.filter((n) => !Number.isNaN(n))
		.reduce((acc, val) => acc + val, 0)
};

console.log(arraySum([1, 2, [1, 2]]))