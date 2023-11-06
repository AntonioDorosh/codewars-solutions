const addNumbers = (...args: number[]) => {
    return args.reduce((acc, curr) => acc + curr, 0)
};

addNumbers(1, 2, 3)
addNumbers(-3, -2, -1, 1, 2, 3, 4)