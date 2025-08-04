const input = 'leetcode'; // 0
const input2 = 'loveleetcode' // 2
const input3 = 'aabb' // - 1

const firstUniqueChar = (str) => {
	const hashMap = new Map();
	const splitString = str.split('');

	splitString.forEach((item) => {
		if (hashMap.has(item)) {
			hashMap.set(item, hashMap.get(item) + 1)
		} else {
			hashMap.set(item, 1)
		}
	});

	for (let i = 0; i < str.length; i++) {
		if (hashMap.get(str[i]) === 1) {
			return i
		}
	}

	return -1;
};

console.log(firstUniqueChar(input2))