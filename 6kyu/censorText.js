const article = "This is a great article about the quick brown fox. The fox jumps over the lazy dog.";
const badWords = ["fox", "lazy"];

const censorText = (article, badWords) => {
	const words = article.split(' ');
	const censoredWords = words.map((word) => {
		const cleanWord = word.replace(/[^\w\s]/gi, '').toLowerCase();

		if (badWords.includes(cleanWord)) {
			return '*'.repeat(cleanWord.length)
		}

		return word
	})

	return censoredWords.join(' ')
};

console.log(censorText(article, badWords))