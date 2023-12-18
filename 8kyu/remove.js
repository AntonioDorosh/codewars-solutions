// const remove = (str, n) => {
//     return str.split('').map((item) => {
//         if (n > 0 && item === '!') {
//             n--;
//             return ''
//         }
//         return item
//     }).join('')
// };

// reduce method

const remove = (str, num, mark = '!') => {
    return [...str].reduce((acc, currentValue) => {
        if (num > 0 && currentValue === mark) {
            num--;
            return acc;
        }
        return acc + currentValue
    }, '')
}

console.log(remove('Hi!!!', 2), 'Hi')
