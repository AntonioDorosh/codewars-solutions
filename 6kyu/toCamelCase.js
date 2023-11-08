// for loop solution
//
// const toCamelCase = (str) => {
//     let result = '';
//
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === '_' || str[i] === '_') {
//             result += str[i + 1].toUpperCase()
//             i++;
//         } else {
//             result += str[i]
//         }
//     }
//
//     return result
// };


// map method solution
const toCamelCase = (str) => {
    const regularFilter = /[_-]/g;
    const words = str.split(regularFilter);

    return words.map((char, index) => index === 0 ? char : char[0].toUpperCase() + char.slice(1)).join('')
};


toCamelCase('the_stealth_warrior') // output theStealthWarrior
