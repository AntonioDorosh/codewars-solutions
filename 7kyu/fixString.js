const fixString = (str) => {
    const arrChars = str.split('');
    const upper = arrChars.filter((char) => char.match(/[A-Z]/)).length;
    const lower = arrChars.filter((char) => char.match(/[a-z]/)).length;

    return lower >= upper ? str.toLowerCase() : str.toUpperCase()
};


console.log(fixString('code'), 'code')
console.log(fixString('CODe'), 'CODE')
console.log(fixString('COde'), 'code')
console.log(fixString('Code'), 'code')