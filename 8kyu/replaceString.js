const replaceSubstring = (str, searchTarget, replaceWord) => {
	let result = '';
	const splitWords = str.split(' ');

	splitWords.forEach((word, index) => {
		const lastElement = word.length - 1;
	  if (word === searchTarget) {
			result += replaceWord
		} else {
			result += word
		}

		if (index < lastElement) {
			result += ' '
		}
	});

	return result
};

console.log((replaceSubstring('hello world', 'world', 'everyone')));