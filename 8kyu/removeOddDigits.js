const nums = 123789;

const removeOddDigits = (number) => {
	const numStr = number.toString();
	let result = '';

	for (const numElement of numStr) {
		const digit = parseInt(numElement, 10);

		if (digit % 2 === 0) {
			result += numElement
		}
	}

	return result === '' ? 0 : parseInt(result, 10)
};

console.log(removeOddDigits(nums))