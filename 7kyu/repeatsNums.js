// const repeatsNums = (arr) => {
//     return arr.filter((el, _, array) => array.indexOf(el) === array.lastIndexOf(el)).reduce((acc, currentValue) => acc + currentValue, 0)
// };

// second solution

// const repeatsNums = (arr) => {
//     const uniqueElArr = [];
//
//     arr.forEach((nums) => {
//         if (uniqueElArr.includes(nums)) {
//             const index = uniqueElArr.indexOf(nums);
//             uniqueElArr.splice(index, 1)
//         } else {
//             uniqueElArr.push(nums)
//         }
//     })
//     return uniqueElArr.reduce((acc, currentValue) => acc + currentValue, 0)
// };

const repeatsNums = (arr) => {
    const uniqueArr = new Set();
    let sum = 0;

    for (let nums of arr) {
        if (!uniqueArr.has(nums)) {
            uniqueArr.add(nums)
            sum += nums
        } else {
            sum -= nums
        }
    }

    return sum
};

repeatsNums([4, 5, 7, 5, 4, 8], 15);

// describe("Basic tests", function(){
//     Test.assertEquals(repeats([4,5,7,5,4,8]),15);
//     Test.assertEquals(repeats([9, 10, 19, 13, 19, 13]),19);
//     Test.assertEquals(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12);
//     Test.assertEquals(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22);
//     Test.assertEquals(repeats([5, 10, 19, 13, 10, 13]),24);
// });