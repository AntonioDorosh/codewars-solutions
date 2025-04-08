const showNextElementOfArray = (arr, element) => {
	const currentIndexElement = arr.indexOf(element);

	if (currentIndexElement === -1) return undefined;

	return arr[(currentIndexElement + 1) % arr.length]
};

console.log(showNextElementOfArray([1,2,3,4,5,6,7,8,9,10], 3))