Array.prototype.myForEach = function (cb) {
	for (let i = 0; i < this.length; i++) {
		cb(this[i], i , this)
	}
}

const output = [1,2,3].myForEach((el) => el + 1);

console.log(output)