const arr = ['a', 'b', 'c', 'd', 'e'];

// by for i loop

// const keysByIndex = (arr) => {
// 	const result = [];
//
// 	for (let i = 0; i < arr.length; i++) {
// 		const element = arr[i];
//
// 		result.push([i + 1, element])
// 	}
//
// 	return Object.fromEntries(result)
// };

//by map

const keysByIndex = (arr) => {
	const keysIdx = arr.map((el, idx) => [idx + 1, el])

	return Object.fromEntries(keysIdx)
};

console.log(keysByIndex(arr))