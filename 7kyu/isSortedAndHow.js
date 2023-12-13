// const isSortedAndHow = (arr) => {
//     return arr.every((item, index) => index === 0 || arr[index] >= arr[index - 1]) ? 'yes, ascending'
//         : arr.every((item, index) => index === 0 || arr[index] <= arr[index - 1]) ? 'yes, descending' : 'no'
// };

const isSortedAndHow = (arr) => {
    const ascending = arr.filter((el, index, array) => el > array[index + 1]).length === 0;
    const descending = arr.filter((el, index, array) => el < array[index + 1]).length === 0;

    return ascending ? 'yes, ascending' : descending ? 'yes, descending' : 'no'
};

console.log(isSortedAndHow([1, 2]), 'yes, ascending');
console.log(isSortedAndHow([15,7,3,-8]), 'yes, descending')