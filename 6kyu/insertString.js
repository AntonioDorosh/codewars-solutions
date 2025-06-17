const sentence = "Hello world!";
const word = "beautiful ";

const insertString = (originalString, insertString, index) => {
	if (index < 0 || index > originalString.length) {
		return "Invalid position";
	}

	const before = originalString.slice(0, index);
	const after = originalString.slice(index);

	return before + word + after
};

console.log(insertString(sentence, word, 12))