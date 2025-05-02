const reverseBetween = (arr, firstIndex, secondIndex) => {
	return arr.reduce((acc, currentValue, currentIndex) => {
	  if (currentIndex >= firstIndex && currentIndex <= secondIndex) {
			acc.push(arr[secondIndex - (currentIndex - firstIndex)]);
		} else {
			acc.push(currentValue)
		}
		
		return acc
	}, []);
};
console.log(reverseBetween([1, 2, 3, 4, 5], 1, 3));