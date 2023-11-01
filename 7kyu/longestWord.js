// const longestWord = (str) => {
//     let words = str.split(' ');
//     let longest = '';
//
//     for (let word of words) {
//        // if word have equal length return last one
//          if (word.length >= longest.length) {
//               longest = word;
//          }
//     }
//
//     return longest;
// };

const longestWord = (str) => {
    return str.split(' ').sort((b, a) => b.length - a.length).pop()
};

console.log(longestWord('one two three')) // three