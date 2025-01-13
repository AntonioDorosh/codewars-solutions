const input = [1, 2, 0, 1, 0, 1, 0, 3, 0, 1];

const moveZeros = (arr, target) => {
	const arrayWithoutZero = arr.filter((num) => num !== target);
	const arrayWithZero = arr.filter((num) => num === target)

	return [...arrayWithoutZero, ...arrayWithZero]
};

console.log(moveZeros(input, 0)) // [1,2,1,1,3,1,0,0,0,0]