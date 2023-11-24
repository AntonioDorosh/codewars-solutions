const reverseSlice = (str) => {
    const reversedStr = str.split('').reverse().join('');
    const result = [];

    for (let i = 0; i < reversedStr.length; i++) {
        result.push(reversedStr.slice(i))
    }

    return result
};

console.log(reverseSlice('123'), ['321', '21', '1'])