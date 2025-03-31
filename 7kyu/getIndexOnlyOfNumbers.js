const str = 'a0b1c2';

const getIndexOnlyOfNumbers = (str) => [...str].reduce((acc, currentValue, idx) => (isNaN(currentValue) ? acc : [...acc, idx]), []);

console.log(getIndexOnlyOfNumbers(str))