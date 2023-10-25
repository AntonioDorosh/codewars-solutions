const sortArr = (arr) => {
    return arr.sort((a, b) => a - b)
};

const maxMinArray = (arr) => {
    let result = [];
    let sortedArr = sortArr(arr)
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        if (start === end) {
            result.push(sortedArr[start]);
        } else {
            result.push(sortedArr[end]);
            result.push(sortedArr[start]);
        }
        start++;
        end--;
    }
    return result
};

console.log(maxMinArray([15, 11, 10, 7, 12])) // 15,7, 12,10, 11