const compressString = (str) => {
	const arr = str.split('');
	const lastItemFromStr = str.at(-1);

	let result = '';
	let count = 1;

	for (let i = 1; i < arr.length; i++) {
		const currentItem = arr[i];
		const previousItem = arr[i - 1];

		if (currentItem === previousItem) {
			count += 1
		} else {
			result += previousItem + count
			count = 1
		}
	}

	result += lastItemFromStr + count

	return result
};

console.log(compressString('aaabbc'))