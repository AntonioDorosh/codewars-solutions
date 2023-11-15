const removeDuplicateChars = (arr) => {
    return arr.map((w) => {
        return w.split('').filter((char, index, arr) => {
            return char !== arr[index - 1]
        }).join('')
    })
};

console.log(removeDuplicateChars(
        ["abracadabra", "allottee", "assessee"]),
    ['abracadabra', 'alote', 'asese'])