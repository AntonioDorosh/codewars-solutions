const animals = ["cat", "dog", "cow", "donkey"];

const uniqueFirstChar = (arr) => {
	const uniqueChars = new Set();

	arr.forEach((word) => {
		const firstCharOfWord = word[0];

		if (!uniqueChars.has(firstCharOfWord)) {
			uniqueChars.add(firstCharOfWord)
		}
	})

	return Array.from(uniqueChars)
};

const result = uniqueFirstChar(animals);

console.log(result)