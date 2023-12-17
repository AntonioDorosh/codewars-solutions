const vowelsIndices = (word) => {
    const vowels = 'aeiouyAEIOUY';
    const arr = word.split('');

    return arr.reduce((acc, currentValue, currentIndex) => {
        const lowerCase = currentValue.toLowerCase();

        if (vowels.includes(lowerCase)) {
            acc.push(++currentIndex)
        }
        return acc
    }, [])
};

// second solution

const vowelsIndices2 = (word) => {
    const vowels = 'aeiouyAEIOUY';
    const arr = word.toLowerCase().split('');
    const result = [];

    arr.forEach((value, index) => {
        if (vowels.indexOf(value) !== - 1) {
            result.push(++index)
        }
    })

    return result
};


console.log(vowelsIndices('apple'))
console.log('vowels 2 ->',vowelsIndices2('apple'))
console.log(vowelsIndices('super'))
console.log(vowelsIndices('mmm'))
console.log(vowelsIndices('orange'))
console.log(vowelsIndices('supercalifragilisticexpialidocious'))