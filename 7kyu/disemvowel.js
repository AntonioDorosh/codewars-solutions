// using new Map
//
// const removeVowels = (str) => {
//     const vowelsMap = new Map([
//         ['a', true],
//         ['e', true],
//         ['i', true],
//         ['o', true],
//         ['u', true],
//     ]);
//
//     return str.split('').filter((item) => !vowelsMap.has(item.toLowerCase())).join('')
// };

// using for loop

// const removeVowels = (str) => {
//     const vowels = 'aeuio';
//     let result = '';
//
//     for (let i = 0; i < str.length; i++) {
//         const words = str[i];
//
//         if (!vowels.includes(words.toLowerCase())) {
//             result += words
//         }
//     }
//
//     return result
// };

// using replace by one-line

const removeVowels = (str) => str.replace(/[aeiou]/gi, '');

console.log(removeVowels('What are you, a communist?'), 'Wht r y, cmnst?')