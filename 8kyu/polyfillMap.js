Array.prototype.myMap = function (cb) {
	const result = [];

	for (let i = 0; i < this.length; i++) {
		result.push(cb(this[i], i, this))
	}

	return result;
}

const output = [1,2,3,4].myMap((el) => el * 2);

console.log(output)