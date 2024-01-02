const findUnique = (arr) => {
    return arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n))
};


console.log(findUnique([1, 0, 0]), 1)
console.log(findUnique([1, 1, 1, 2, 1, 1]), 2)