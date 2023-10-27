// const noIfNoButs = (a, b) => {
//     while (a > b) {
//         return `${a} is greater than ${b}`
//     }
//
//     while (a < b) {
//         return `${a} is smaller than ${b}`
//     }
//
//     return `${a} is equal to ${b}`
// };
//
// console.log(noIfNoButs(5, 4))

const noIfNoButs = (a, b) => {
    switch (true) {
        case (a > b):
            return `${a} is greater than ${b}`
        case (a < b):
            return `${a} is smaller than ${b}`
        case (a === b):
            return `${a} is equal to ${b}`
        default:
            return 'Error'
    }
};

noIfNoButs(5, 4)