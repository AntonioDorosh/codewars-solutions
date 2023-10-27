const duplicateArgs = (...args) => {
    return args.some((el) => {
        return args.indexOf(el) !== args.lastIndexOf(el);
    });
};

console.log(duplicateArgs(1,2,3))