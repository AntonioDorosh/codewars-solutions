const result = 'Привет, мир!';

const normalizeAndCountLetters = (str) => {
	const clean = str.toLowerCase().replace(/[^а-яёa-z]/gu, '');
	const wordFrequency = new Map();

	for (const char of clean) {
		wordFrequency.set(char, (wordFrequency.get(char) || 0) + 1);
	}

	return Object.fromEntries(wordFrequency)
};

console.log(normalizeAndCountLetters(result))