const arr = [123, 456, 789];

const reversedNumbers = (num) => String(num).split('').reduce((acc, currentValue) => currentValue + acc, '');

const result = arr.map((num) => Number(reversedNumbers(num)));

console.log(result)