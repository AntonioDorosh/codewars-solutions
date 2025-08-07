const text = "JavaScript это очень мощный язык. JavaScript очень популярный.";

const analyzeText = (text) => {
	const words = text
		.replace(/[.,!?]/g, '')
		.toLowerCase()
		.split(' ')

	const wordFrequency = words.reduce((accMap, word) => {
		accMap.set(word, (accMap.get(word) || 0) + 1)

		return accMap
	}, new Map())

	const [mostFrequentWord, _] = [...wordFrequency.entries()]
		.reduce((entry, max) => (entry[1] > max[1] ? entry : max), ['', 0]);

	return {
		totalWords: words.length,
		uniqueWords: wordFrequency.size,
		mostFrequentWord,
		wordFrequency: Object.fromEntries(wordFrequency)
	}
};
console.log(analyzeText(text));

//{
//   "totalWords": 8,
//   "uniqueWords": 6,
//   "mostFrequentWord": "JavaScript",
//   "wordFrequency": {
//     "javascript": 2,
//     "это": 1,
//     "очень": 2,
//     "мощный": 1,
//     "язык": 1,
//     "популярный": 1
//   }
// }