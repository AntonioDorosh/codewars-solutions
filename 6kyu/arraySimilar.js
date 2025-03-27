const arr1 = [1, 2, 2, 3, 4],
	arr2 = [2, 1, 2, 4, 3],
	arr3 = [1, 2, 3, 4],
	arr4 = [1, 2, 3, "4"];

const arraySimilar = (arr1, arr2) => {
	return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort())
};

console.log(arraySimilar(arr1, arr2)) // true
console.log(arraySimilar(arr3, arr4)) // false