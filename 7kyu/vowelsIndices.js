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


console.log(vowelsIndices('apple'))
console.log(vowelsIndices('super'))
console.log(vowelsIndices('mmm'))
console.log(vowelsIndices('orange'))
console.log(vowelsIndices('supercalifragilisticexpialidocious'))