Array.prototype.myFilter = function (cb) {
	const result = [];

	for (let i = 0; i < this.length; i++) {
		if (cb(this[i], i, this)) {
			result.push(this[i])
		}
	}

	return result;
}

const output = [1,2,3,4,5,6].myFilter((el) => el % 2 === 0);

console.log(output)