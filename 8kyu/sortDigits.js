const num = 35142;

const sortDigits = (nums) => Number(nums.toString().split('').sort((a, b) => a - b).join(''));

const result = sortDigits(num);

console.log(result) // 12345