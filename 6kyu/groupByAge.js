const input = [{name: "Tom", age: 20}, {name: "Ann", age: 20}, {name: "Bob", age: 30}];

const groupByAge = (arr) => {
	return arr.reduce((acc, currentValue) => {
	  const { age } = currentValue;
		
		if (!acc.has(age)) {
			acc.set(age, []);
		}
		
		acc.get(age).push(currentValue);
		
		return acc
	}, new Map());
};

console.log(groupByAge(input));

//[{name: "Tom", age: 20}, {name: "Ann", age: 20}, {name: "Bob", age: 30}]
// → Map { 20 → [...], 30 → [...] }