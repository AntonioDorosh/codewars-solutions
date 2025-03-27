const hasDuplicates = (text) => {
	const arr = text.split('');

	for (const arrElement of arr) {
		if(arr.indexOf(arrElement) !== arr.lastIndexOf(arrElement)) {
			return true
		}
	}
	return false
};

console.log(hasDuplicates("hello")); // true
console.log(hasDuplicates("world")); // false
console.log(hasDuplicates('javascript')) // true