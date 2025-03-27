const arrCheck = (value) => {
	return value.every(Array.isArray)
};

console.log(arrCheck([]), true)
console.log(arrCheck(['string']), true)
console.log(arrCheck([], {}), false)