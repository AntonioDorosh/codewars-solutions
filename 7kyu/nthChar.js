const nthChar = (words) => {
    return words.map((char, index) => char[index]).join('')
};

console.log(nthChar(['yoda', 'best', 'has']), 'yes')