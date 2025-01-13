const spinWords = (str) => {
	return str.split(' ').map((el) => el.length >= 5 ? el.split('').reverse().join('') : el).join(' ')
};
console.log(spinWords('Hey fellow warriors'), 'expected: Hey wollef sroirraw')