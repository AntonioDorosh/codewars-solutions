const isSortedAndHow = (arr) => {
    return arr.every((item, index) => index === 0 || arr[index] >= arr[index - 1]) ? 'yes, ascending'
        : arr.every((item, index) => index === 0 || arr[index] <= arr[index - 1]) ? 'yes, descending' : 'no'
};

console.log(isSortedAndHow([1, 2]), 'yes, ascending');
console.log(isSortedAndHow([15,7,3,-8]), 'yes, descending')