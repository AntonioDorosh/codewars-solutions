const lowercaseCount = (str) => {
    return str.replace(/[^a-z]/g, '').length
};

console.log(lowercaseCount('abc'), 3);
console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz"), 26);
console.log(lowercaseCount(''), 0);
console.log(lowercaseCount('abcABC123'))