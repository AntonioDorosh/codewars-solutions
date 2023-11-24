const getLetter = (text, length) => {
    return text[length - 1] || ''
};

console.log(getLetter('Hello', 5), 'o')