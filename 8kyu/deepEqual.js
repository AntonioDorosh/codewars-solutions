const objA = { a: 1, b: { c: 2 } };
const objB = { a: 1, b: { c: 2 } };
const objC = { a: 1, b: { c: 3 } };

const deepEqual = (obj1, obj2) => {
	if (obj1 === obj2) return true;

	if (obj1 === null || typeof obj1 !== 'object' || obj2 === null || typeof obj2 !== 'object') {
		return false;
	}

	const keys1 = Object.keys(obj1);
	const keys2 = Object.keys(obj2);

	if (keys1.length !== keys2.length) return false;

	for (const key of keys1) {
		if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
			return false;
		}
	}

	return true;
};


console.log(deepEqual(objA, objB)); // true
console.log(deepEqual(objA, objC)); // false
console.log(deepEqual(objA, null)); // false
console.log(deepEqual(null, null)); // true