const result = ["hi", "hello"];

const keyAsLengthInMap = (arr) => {
	return arr.reduce((acc, word) => {
		const length = word.length

		if (!acc[length]) {
			acc.set(length, [])
		}
		
		acc.get(length).push(word)
		
		return acc
	}, new Map())
};

console.log(keyAsLengthInMap(result))