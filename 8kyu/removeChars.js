const str = 'abcde abcde';

const del = 'abe';

const solution = (str) => {
	let result = '';

	for (const strElement of str) {
		if (!del.includes(strElement)) {
			result += strElement
		}
	}

	return result
};

console.log(solution(str))