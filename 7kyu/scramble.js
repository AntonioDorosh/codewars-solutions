// for loop solution

// const scramble = (str, arr) => {
//    const result = [];
//
//     for (let i = 0; i < str.length; i++) {
//         const arrElements = arr[i];
//
//         result[arrElements] = str[i]
//     }
//
//    return result
// };

const scramble = (str, arr) => arr.map((_, index) => str[arr.indexOf(index)]).join('');

console.log(scramble('abcd', [0, 3, 1, 2])) // acdb

