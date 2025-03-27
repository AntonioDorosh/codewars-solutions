const closest = (arr) => {
	return arr.sort((a, b) => Math.abs(a) - Math.abs(b)).includes(arr[0] * -1) && arr[0] !== 0 ? null : arr[0]
};

console.log(closest([10, 3, 9, 1], 1))