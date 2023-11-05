const splitString = (str) => {
    return str.length % 2 === 0 ? str.match(/.{1,2}/g) : str.concat('_').match(/.{1,2}/g);
};

console.log(splitString('abcde'))