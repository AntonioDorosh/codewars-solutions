// const fixString = (str) => {
//     const arrChars = str.split('');
//     const upper = arrChars.filter((char) => char.match(/[A-Z]/)).length;
//     const lower = arrChars.filter((char) => char.match(/[a-z]/)).length;
//
//     return lower >= upper ? str.toLowerCase() : str.toUpperCase()
// };

// reduce method

const fixString = (str) => {
    return str.split('').reduce((acc, currentValue) => currentValue === currentValue.toUpperCase() ? acc + 1 : acc - 1, 0) > 0 ? str.toUpperCase() : str.toLowerCase()
};


console.log(fixString('code'), 'code')
console.log(fixString('CODe'), 'CODE')
console.log(fixString('COde'), 'code')
console.log(fixString('Code'), 'code')