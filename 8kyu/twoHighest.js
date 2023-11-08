const sortArr = (arr) => {
    return [...new Set(arr)].sort((a, b) => b - a)
};

const twoHighest = (arr) => {
    const sortedArr = sortArr(arr);
    return sortedArr.slice(0 ,2)
};

console.log(twoHighest([15]))