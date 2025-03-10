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
    return str.split('').reduce((acc, char, _, arr) => {
        if (arr.indexOf(char) !== arr.lastIndexOf(char)) {
            acc += char
        }

        return acc
    }, '')
};


console.log((onlyDuplicates('abccdefee'), 'cceee'));