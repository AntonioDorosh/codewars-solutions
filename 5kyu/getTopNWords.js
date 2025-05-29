const text = "The quick brown fox jumps over the lazy dog. The dog barks loudly.";

const getTopNWords = (text, n) => {
	const words = text.toLowerCase().replaceAll('.', '').split(' ');
	const wordsCount = words.reduce((acc, word) => {
		acc[word] = (acc[word] || 0) + 1

		return acc
	}, {})

	return Object.entries(wordsCount).sort(([,sortA], [, sortB]) => sortB - sortA).map(([word, count]) => ({
		word,
		count
	})).slice(0, n);
};

console.log(getTopNWords(text, 2));