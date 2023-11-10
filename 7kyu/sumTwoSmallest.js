// sort solution

// const sumTwoSmallest = (num) => {
//     const [first, second] = num.sort((a, b) => a - b);
//
//     return first + second;
// };

// reduce solution

const sumTwoSmallest = (num) => {
    return num.sort((a,b) => a - b).slice(0, 2).reduce((acc, item) => acc + item, 0)
};

console.log(sumTwoSmallest([5,8,12,19,22]), 13)