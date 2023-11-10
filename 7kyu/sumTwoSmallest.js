const sumTwoSmallest = (num) => {
    const [first, second] = num.sort((a, b) => a - b);

    return first + second;
};

console.log(sumTwoSmallest([5,8,12,19,22]), 13)