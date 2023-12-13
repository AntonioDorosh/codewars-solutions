const sumDigits = (number) => {
    return Math.abs(number).toString().split('').reduce((s, e) => s + +e, 0)
};

console.log(sumDigits(99), 18) // 18