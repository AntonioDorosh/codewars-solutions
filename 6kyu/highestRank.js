
const numbers = [12,10,8,12,7,6,4,10,12];

const highestRank = (arr) => {
    const obj = {};
    arr.forEach((item) => obj[item] ? obj[item]++ : obj[item] = 1)

    const max = Math.max(...Object.values(obj));
    const result = Object.keys(obj).filter((item) => obj[item] === max);
    return Math.max(...result.map((item) => parseInt(item)))
};

console.log(highestRank(numbers), 12)