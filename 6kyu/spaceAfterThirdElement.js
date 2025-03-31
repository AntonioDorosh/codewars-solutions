const str = '1234567';

const spaceAfterThirdElement = (str) => {
	return [...str].reduceRight((acc, currentValue, currentIndex, array) => {
		return ((array.length - currentIndex) % 3 === 0 ? ' ' : '') + currentValue + acc
	}, '')
};

console.log(spaceAfterThirdElement(str))