const uniqueLengths = (arr) => {
	const uniqueWord = new Set();

	arr.forEach((word) => {
		if (!uniqueWord.has(word)) uniqueWord.add(word)
	});

	return Array.from(uniqueWord).filter((word) => word.length > 3).map((word) => word.length)
};
console.log(uniqueLengths(["hi", "hello", "hi", "world", "yo"]));