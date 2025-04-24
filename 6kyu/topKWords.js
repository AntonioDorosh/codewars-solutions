const text = 'Hello hello! JavaScript is cool. Cool and powerful.'

const topKWords = (text, k) => {
	const words = text.toLowerCase().replace(/[^\w\s]/g,'').split(' ');

	const wordCount = words.reduce((acc, word) => {
		acc[word] = (acc[word] || 0) + 1

		return acc
	}, {})

	const sortedWords = Object.entries(wordCount).sort(([, countA], [, countB]) => countB - countA)

	return sortedWords.slice(0, k).map(([word]) => word)
};

console.log(topKWords(text, 2))