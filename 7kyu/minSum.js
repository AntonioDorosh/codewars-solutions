const minSum = (arr) => {
    const sorted = arr.sort((a, b) => a - b);
    const sliced = sorted.slice(0, arr.length / 2);

    return sliced.reduce((acc, currentValue, currentIndex) => {
        return acc + currentValue * arr[arr.length - 1 - currentIndex]
    }, 0)
};

console.log(minSum([5,4,2,3]), 22)