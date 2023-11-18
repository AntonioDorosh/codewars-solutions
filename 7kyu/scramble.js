const scramble = (str, arr) => {
    const result = [];

    for (let i = 0; i < str.length; i++) {
        const el = arr[i];
        result[el] = str[i]
    }

    return result.join('')
};

console.log(scramble('abcd', [0, 3, 1, 2])) // acdb