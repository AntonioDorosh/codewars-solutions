const noBoringZeroes = (num) => {
    const numArr = String(num).split('');

    while (numArr.at(-1) === '0') {
        numArr.pop()
    }

    return +numArr.join('')
};

console.log(noBoringZeroes(1450), 145)
console.log(noBoringZeroes(960000))
console.log(noBoringZeroes(-105), 105)