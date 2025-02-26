const findShort = (str) => {
	const arr = str.split(' ');
	let smallest = arr[0];

	for (const arrElement of arr) {
		if (arrElement.length < smallest.length) {
			smallest = arrElement
		}
	}

	return smallest
};
console.log((findShort("bitcoin take over the world maybe who knows perhaps"), 3));
console.log((findShort("Let's travel abroad shall we"), 2));