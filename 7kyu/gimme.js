// function gimme (triplet) {
//     return [...triplet].indexOf(triplet.sort((a, b) => a - b)[1])
// }

const gimme = (arr) => {
    const existEl = [...arr].sort((a, b) => a - b);

    return arr.indexOf(existEl[1])
};

console.log(gimme([5,10,14]), 1)