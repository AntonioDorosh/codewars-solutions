const convertText = (text) => {
	const convert = text.split('').reverse().join('');
	const firstChar = text.charAt(0);

	return firstChar !== firstChar.toUpperCase() ? convert : text
};


console.log(convertText('hello'))
console.log(convertText('Hello'))