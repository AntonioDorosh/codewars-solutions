const stringHash = (obj) => {
    return Object.entries(obj).map(([key, value]) => `${key} = ${value}`).join(',')
};

console.log(stringHash({a: 1, b: 2}))