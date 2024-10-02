const obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
};

// for in loop sol

// const sumNestedObj = (nestedObj) => {
// 	let result = 0;
//
// 	for (const objKey in nestedObj) {
// 		for (const nestedObjEl in nestedObj[objKey]) {
// 			result += nestedObj[objKey][nestedObjEl]
// 		}
// 	}
//
// 	return result
// };

// reduce solution

const sumNestedObj = (nestedObj) => {
	return Object.values(nestedObj).reduce((acc, currentValue) => {
		return acc + Object.values(currentValue).reduce((innerAcc, innerCurrentValue) => innerAcc + innerCurrentValue, 0)
	}, 0)
};

sumNestedObj(obj) // 177