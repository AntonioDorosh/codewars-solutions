const chainingNums = (num) => {
	return function addOne(b) {
		return num + b
	}
};

console.log(chainingNums(1)(3))