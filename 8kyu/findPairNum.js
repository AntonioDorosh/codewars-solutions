const numbers = [2, 5, 9, 11, 10];

const findPairNum = (arr, target) => {
    let left = 0;
    let right = arr[arr.length - 1];

    while (left < right) {
        const currentNum = arr[left] + arr[right];

        if (currentNum === target) {
            return [arr[left], arr[right]];
        } else if (currentNum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
};

console.log(findPairNum(numbers, 7), [2, 5]);