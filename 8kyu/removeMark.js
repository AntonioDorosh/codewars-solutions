// const remove = (str) => {
//     return str.replace(/!+$/, '')
// };

// const remove = (str) => {
//     const strArr = str.split('');
//
//     while(strArr[strArr.length - 1] === '!') {
//         strArr.pop()
//     }
//
//     return strArr.join('')
// };

const remove = (str) => {

    while (str.endsWith('!')) {
        str = str.slice(0, -1)
    }

    return str
};


console.log(remove("Hi!", "Hi"));
console.log(remove("Hi!!!", "Hi"));
console.log(remove("!Hi", "!Hi"));
console.log(remove("!Hi!", "!Hi"));
console.log(remove("Hi! Hi!", "Hi! Hi"));
console.log(remove("Hi", "Hi"));