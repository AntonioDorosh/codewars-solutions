const keyAsLength = (arr) => {
	return arr.reduce((acc, word) => {
	  const key = word.length;
		
		if (!acc[key]) acc[key] = [];
		
		acc[key].push(word);
		
		return acc
	}, {});
};

console.log(keyAsLength(['one', 'three', 'two', 'four']));