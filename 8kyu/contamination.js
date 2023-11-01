// const contamination = (text, char) => {
//     if (!text) {
//         return ''
//     }
//
//     let result = ''
//
//     for (let i = 0; i < text.length; i++) {
//         result += char
//     }
//
//     return result
// };

const contamination = (text, char) => {
    return char.repeat(text.length)
};

console.log(contamination('abc', 'z'))