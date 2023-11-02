// const countUpperCaseWords = (array) => {
//     let result = [];
//
//     for (let i = 0; i < array.length; i++) {
//         const el = array[i];
//
//         if (el[0] === el[0].toUpperCase()) {
//             result.push(el)
//         }
//     }
//
//     return result;
// };
//


const countUpperCaseWords = (array) => {
    return array.filter((word) => word[0] === word[0].toUpperCase())
};

countUpperCaseWords(['New-York', 'London', 'moscow', 'Dubai'])