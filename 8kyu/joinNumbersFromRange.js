const joinNumbersFromRange = (start, end) => {
    return Array.from({length: end - start + 1}, (_, k) => k + start).join('')
};

console.log(joinNumbersFromRange(5, 10))