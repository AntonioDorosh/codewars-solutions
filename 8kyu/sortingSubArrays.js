const arr = [
	[2, 1, 4, 3, 5],
	[3, 5, 2, 4, 1],
	[4, 3, 1, 5, 2],
];

const sorting = (arr) => arr.sort((a, b) => a - b);

const sortingSubArrays = (arr) => arr.map((el) => sorting(el));

console.log(sortingSubArrays(arr))