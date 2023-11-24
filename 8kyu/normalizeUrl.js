const normalizeUrl = (str) => {
    const httpStr = 'https://';
    let result = '';

    if (str.startsWith(httpStr)) {
        return str
    } else {
        result += httpStr + str
    }

    return result
};

console.log(normalizeUrl('google.com'))
console.log(normalizeUrl('https://yandex.com'))