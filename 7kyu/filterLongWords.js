const filterLongWords = (str, strLength) => {
    return str.split(' ').filter((item) => item.length > strLength)
};

console.log(filterLongWords('The quick brown fox jumps over the lazy dog', 4))