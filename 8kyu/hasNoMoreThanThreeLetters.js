const str = 'a1b2c3d4';

const hasNoMoreThanThreeLetters = (str) => {
	const letters = str.match(/[a-zA-Z]/g) || [];

	return letters.length <= 3
};

console.log(hasNoMoreThanThreeLetters("a1b2"));
console.log(hasNoMoreThanThreeLetters("a1b2c3d"));