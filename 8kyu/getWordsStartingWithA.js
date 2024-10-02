const text = "Apple banana apricot orange avocado";

const getWordsStartingWithA = (str, target) => {
	return str.toLowerCase().split(' ').filter((word) => word.startsWith(target))
};

const result = getWordsStartingWithA(text, 'a');

console.log(result)