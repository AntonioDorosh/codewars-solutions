// filter solution

// const onlyDuplicates = str => {
//     return str.split('').filter((el, _, arr) => arr.indexOf(el) !== arr.lastIndexOf(el))
// };


//forEach solution
const onlyDuplicates = (str) => {
    const result = [];
    const strArr = str.split('');

    strArr.forEach((item, _, arr) => {
        if (arr.indexOf(item) !== arr.lastIndexOf(item)) {
            result.push(item)
        }
    })

    return result
};

console.log((onlyDuplicates('abccdefee'), 'cceee'));