const convert = (number) => {
    const result = [];

    for (let i = 0; i < number.length; i += 2) {
        result.push(number.slice(i, i + 2) * 1)
    }

    return String.fromCharCode(...result)
};

console.log(convert('65'), 'A')
console.log(convert("656667"))
