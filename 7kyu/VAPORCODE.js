const output = 'Lets go to the movies';

const vaporCode = (str) => {
	return str.toUpperCase().split('').reduce((acc, currentValue) => currentValue !== ' ' ? acc + currentValue + '  ' : acc, '').trim()
};

console.log(vaporCode(output)) // -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"