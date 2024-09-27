const str = 'abcdefg';

const removeEveryThirdChar = (str) => {
	return [...str].reduce((acc, currentValue, currentIndex) => (currentIndex + 1) % 3 !== 0 ? acc += currentValue : acc, '')
};

removeEveryThirdChar(str) // 'adbeg'