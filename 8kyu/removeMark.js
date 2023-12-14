// const remove = (str) => {
//     return str.replace(/!+$/, '')
// };

const remove = (str) => {
    const strArr = str.split('');

    while(strArr[strArr.length - 1] === '!') {
        strArr.pop()
    }

    return strArr.join('')
};

console.log(remove("Hi!", "Hi"));
console.log(remove("Hi!!!", "Hi"));
console.log(remove("!Hi", "!Hi"));
console.log(remove("!Hi!", "!Hi"));
console.log(remove("Hi! Hi!", "Hi! Hi"));
console.log(remove("Hi", "Hi"));