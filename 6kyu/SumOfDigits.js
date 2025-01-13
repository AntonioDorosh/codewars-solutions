const digitalRoot = (num) => {
	if (num < 10) return num;

	return digitalRoot(num.toString().split('').reduce((acc, el) => {
		return acc + Number(el)
	}, 0))
};

console.log(digitalRoot(16), 7)
console.log(digitalRoot(942), 6)