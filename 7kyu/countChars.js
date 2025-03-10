const word = 'hello';

const countChars = (str) => {
	return str.split('').reduce((acc, char) => {
		acc[char] = (acc[char] || 0) + 1

		return acc
	}, {})
};
console.log(countChars(word));