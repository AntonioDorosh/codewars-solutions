const str = 'a bc def ghij';

const moreThanThreeCharsCapitalize = (str) => {
	return str.split(' ').map((char) => char.length <= 3 ? char.toUpperCase() : char).join(' ')
};

console.log(moreThanThreeCharsCapitalize(str))