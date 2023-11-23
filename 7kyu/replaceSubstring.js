const replaceSubstring = (originalStr, targetSubstring, replacement) => {
    const regExp = new RegExp(targetSubstring, 'g');

    return originalStr.replace(regExp, replacement)
};

const result = replaceSubstring('Hello, world! Hello, JavaScript', 'Hello', 'Hi');

console.log(result)