const objA = {
    a: 10,
    b: 20,
    c: 30
};

const objB = {
    a: 3,
    c: 6,
    d: 3
};

const combine = (...args) => {
    let result = {};

    for (let i = 0; i < args.length; i++) {
        for (let key in args[i]) {
            if (!result[key]) {
                result[key] = args[i][key]
            } else {
                result[key] += args[i][key]
            }
        }
    }

    return result
};



console.log(combine(objA, objB))

