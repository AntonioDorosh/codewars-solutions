// for loop solution

// const scrollingText = (text) => {
//     let result = [];
//
//     for (let i = 0; i < text.length; i++) {
//         result.push((text.slice(i) + text.slice(0, i)).toUpperCase())
//     }
//
//     return result;
// };

// map solution

const scrollingText = (text) => {
    return text.split('').map((_, index) => {
        return text.slice(index).toUpperCase() + text.slice(0, index).toUpperCase()
    })
};

console.log(scrollingText('abc'))