const stringChunk = (str, number) => {
    if (number <= 0 || number === undefined || typeof number !== 'number') return [];
    let result = [];
    for (let i = 0; i < str.length; i += number) {
        result.push(str.slice(i, i + number));
    }
    return result;
};

stringChunk('codewars', 2);
console.log(stringChunk('thiskataeasy', 4));