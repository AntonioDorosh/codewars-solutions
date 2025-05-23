const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const setInterSectionArrays = (arr1, arr2) => {
	const set1 = new Set(arr1);
	const set2 = new Set(arr2);
	const interSectionSet = new Set([...set1].filter((item) => set2.has(item)));
	
	return Array.from(interSectionSet)
};

console.log(setInterSectionArrays(arr1, arr2))