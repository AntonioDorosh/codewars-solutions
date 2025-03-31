const arr = ['World', 'Dino'];

const firstAndLastSame = (arr) => {
	const [first, last] = arr;

	return first.at(-1).toLowerCase() === last.at(0).toLowerCase()
};

console.log(firstAndLastSame(arr))