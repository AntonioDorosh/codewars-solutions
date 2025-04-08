const showRandomElement = (arr) => {
	if (!Array.isArray(arr) || arr.length === 0) return undefined

	const randomIndex = Math.floor(Math.random() * arr.length);

	return arr[randomIndex]
};
console.log(showRandomElement([1,2,3,4,5,6,7,8,9,10]))