const isSquare = (num) => {
    return Math.sqrt(num) % 1 === 0
};

isSquare(0) // true
isSquare(5) // false
isSquare(25) // true