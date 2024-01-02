const filterString = (value) => {
    const result = value.split('').reduce((acc, currentValue) => {
        if (!isNaN(currentValue)) {
            acc += currentValue
        }

        return acc
    }, '');

    return Number(result)
};

console.log(filterString('123'), 123)
console.log(filterString('a1b2c3'), 123)