const findLongest = (arr) => {
    return arr.reduce((prev, current) => (`${current}`.length > `${prev}`.length ? current : prev))
};

console.log(findLongest([8, 900, 500]));