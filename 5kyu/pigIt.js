const pigIt = (str) => {
	const postFix = 'ay';
	const punctuationMarks = ['!', ',', '.', '?'];

	return str.split(' ').map((el) => {
		const firstLetter = el.charAt(0);
		const resultOutput = `${el.slice(1)}${firstLetter}${postFix}`

		return !punctuationMarks.includes(el) ? resultOutput : el
	}).join(' ')
};
console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));   // elloHay orldway !