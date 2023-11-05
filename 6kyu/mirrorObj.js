const reverseKeys = (obj) => obj.split('').reverse().join('');

const mirrorObj = (obj) => {
    const keys = Object.keys(obj);

    return keys.reduce((acc, key) => {
        return {
            ...acc,
            [key]: reverseKeys(key)
        }
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