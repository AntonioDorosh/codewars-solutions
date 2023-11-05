const reverseKeys = obj => obj.split('').reverse().join('')

const mirrorObj = (obj) => {
    return Object.keys(obj).reduce((obj, key) => {
        obj[key] = reverseKeys(key)

        return obj
    }, {})
};

// const mirrorObj = (obj) => {
//     let newObj = {};
//
//     for (let objKey in obj) {
//         newObj[objKey] = reverseKeys(objKey)
//     }
//
//     return newObj
// };


mirrorObj({
    abc: undefined,
    arara: undefined
});