const areAnagrams = (str1, str2) => {
	if (str1.length !== str2.length) return false;

	const cleanSortString = (str) => {
		return str.replace(/[^a-z]/gi, '')
			.toLowerCase()
			.split('')
			.sort()
			.join('')
	};

	return cleanSortString(str1) === cleanSortString(str2)
};

console.log((areAnagrams("listen", "silent")));