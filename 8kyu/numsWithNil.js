const numbers = [10, 23, 40, 52, 101, 7, 90];

const numsWithNil = (arr, searchTerm) => {
	return arr.sort((a, b) => a - b).filter((num) => num.toString().includes(searchTerm))
};

const result = numsWithNil(numbers, '0')

console.log(result) // [ 10, 40, 90, 101 ]