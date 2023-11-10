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
    text = text.toUpperCase();

    return [...text].map((_, index) => text.slice(index) + text.slice(0, index))
};

console.log(scrollingText('abc'))