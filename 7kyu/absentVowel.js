// const absentVowel = (str) => {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let result = [];
//
//     for (let i = 0; i < str.length; i++) {
//         let lowerCase = str[i].toLowerCase();
//
//         if (vowels.includes(lowerCase)) {
//             result.push(lowerCase)
//         }
//     }
//
//     for (let i = 0; i < vowels.length; i++) {
//         const vowelsItems = vowels[i];
//
//         if (!result.includes(vowelsItems)) {
//             return vowels.indexOf(vowelsItems)
//         }
//     }
// };

const absentVowel = (str) => {
    const vowels = ['a','e','i','o','u'];

    return vowels.findIndex((char) => !str.toLowerCase().includes(char))
};

absentVowel("John Doe hs seven red pples under his bsket").log // 0 --> missing: 'a'
absentVowel('Bb Smith sent us six neatly arranged range bicycles') // 3 --> missing: 'o'