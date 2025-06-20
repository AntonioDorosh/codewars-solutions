const article = "This is a great article about the quick brown fox. The fox jumps over the lazy dog.";
const badWords = ["fox", "lazy"];

const censorText = (article, badWords, censorChar) => {
	const words = article.split(' ');
	const censoredWords = words.map((word) => {
		const cleanWords = word.replace(/[^\w\s]/gi, '').toLowerCase();

		if (badWords.includes(cleanWords)) {
			return censorChar.repeat(cleanWords.length)
		}

		return word
	})

	return censoredWords.join(' ')
};

console.log(censorText(article, badWords, '*'))