// using map method
//
// const makeString = (str) => {
//     return str.split(' ').map((char) => char.slice(0, 1)).join('')
// };
//
// makeString('sees eyes xray yoat')


// using for loop

// const makeString = (str) => {
//     const splitWords = str.split(' ');
//     let result = '';
//
//     for (let i = 0; i < splitWords.length; i++) {
//         const firstLetter = splitWords[i].charAt(0);
//
//         result += firstLetter
//     }
//
//     return result;
// };
//
// console.log(makeString('sees eyes xray yoat'))