const findLongest = (arr) => {
    return arr.reduce((prev, current) => (`${current}`.length > `${prev}`.length ? current : prev))
};

// sol with sort
// const findLongest = (array) => {
//     return array.sort((a, b) => String(b).length - String(a).length)[0]
// };

console.log(findLongest([8, 900, 500]));