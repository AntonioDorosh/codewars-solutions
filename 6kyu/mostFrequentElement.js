const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

const frequencyMap = (arr) => {
	return arr.reduce((acc, fruit) => {
		acc[fruit] = (acc[fruit] || 0) + 1

		return acc
	}, {})
};

const mostFrequentElement = () => {
	const freqMap = frequencyMap(arr);
	const entries = Object.entries(freqMap);

	return entries.reduce((acc, [element, count]) => (count > acc.count ? {element, count} : acc), {
		element: '',
		count: 0
	}).element
};

console.log(mostFrequentElement());