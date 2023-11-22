// const lengthWithoutSpaces = (str) => {
//     let result = '';
//
//     for (let i = 0; i < str.length; i++) {
//         const strElement = str[i];
//
//         if (strElement.includes(' ')) {
//             continue;
//         }
//
//         result += strElement
//     }
//
//     return result.length
// };


const lengthWithoutSpaces = (str) => {
    return str.split(' ').join('').length
};
lengthWithoutSpaces('Hello World', 10)
lengthWithoutSpaces('JavaScript is awesome', 19)