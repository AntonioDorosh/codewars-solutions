// const findVowels = (str) => {
//     let count = 0;
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//
//     for (const char of str.toLowerCase()) {
//         if (vowels.includes(char)) {
//             count++
//         }
//     }
//     return count;
// };


const findVowels = (str) => {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        const element = str[i];

        if (vowels.includes(element)) {
            count++;
        }
    }

    return count;
};

console.log(findVowels('Hello, man')) // 3 vowels was found