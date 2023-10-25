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

// with reduce method
const combine = (...args) => {
    return args.reduce((acc, curr) => {
        for (let key in curr) {
            if (acc[key]) {
                acc[key] += curr[key];
            } else {
                acc[key] = curr[key];
            }
        }
        return acc;
    }, {})
};

// with for loop

const combine = (...args) => {
    let newObj = {};
    for (let obj of args) {
        for (let key in obj) {
            if (newObj[key]) {
                newObj[key] += obj[key];
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    return newObj;
}


(combine(objA, objB)); // { a: 13, b: 20, c: 36, d: 3 }
