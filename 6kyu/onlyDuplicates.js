// filter solution

// const onlyDuplicates = str => {
//     return str.split('').filter((el, _, arr) => arr.indexOf(el) !== arr.lastIndexOf(el))
// };


//forEach solution
// const onlyDuplicates = (str) => {
//     const result = [];
//     const strArr = str.split('');
//
//     strArr.forEach((item, _, arr) => {
//         if (arr.indexOf(item) !== arr.lastIndexOf(item)) {
//             result.push(item)
//         }
//     })
//
//     return result
// };

// reduce sol

const onlyDuplicates = (str) => {
    return str.split('').reduce((acc, currentValue, _, arr) => {
        if (arr.indexOf(currentValue) !== arr.lastIndexOf(currentValue)) {
            acc += currentValue
        }

        return acc
    }, '')
};


console.log((onlyDuplicates('abccdefee'), 'cceee'));