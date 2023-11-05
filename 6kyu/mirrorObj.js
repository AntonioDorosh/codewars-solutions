const mirrorObj = (obj) => {
    return Object.keys(obj).reduce((obj, key) => {
        obj[key] = key.split('').reverse().join('')
        return obj
    }, {})
};

mirrorObj({
    abc: undefined,
    arara: undefined
})