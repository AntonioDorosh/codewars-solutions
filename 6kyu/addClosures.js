const addClosures = (...args) => {
	let sum = args.reduce((acc, num) => acc + num, 0);

	const innerFn = (...innerArgs) => {
		if (innerArgs.length === 0) {
			return sum;
		} else {
			sum += innerArgs.reduce((acc, num) => acc + num, 0);
			return innerFn
		}
	};

	return innerFn
};

console.log(addClosures(1)(2)(3)());   // 6
console.log(addClosures(10)());        // 10
console.log(addClosures(1)(1)(1)(1)()); // 4