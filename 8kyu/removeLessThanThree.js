const output = new Set(["hi", "cat", "a"]);


const removeLessThanThree = (input) => {
	return new Set([...input].filter((value) => value.length >= 3))
};
console.log(removeLessThanThree(output)) // Set(["cat"])