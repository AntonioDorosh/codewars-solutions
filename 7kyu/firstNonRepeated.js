// const firstNonRepeated = (str) => {
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//
//         if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) {
//             return char;
//         }
//     }
//     return null;
// };

const firstNonRepeated = (str) => {
    return [...str].find((i) => str.indexOf(i) === str.lastIndexOf(i)) || null;
};

console.log(firstNonRepeated('test'))
console.log(firstNonRepeated('teeter"'))