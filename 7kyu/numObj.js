// const numObj = (char) => {
//     const result = [];
//
//     char.forEach((item) => {
//         let obj = {};
//         obj[item] = String.fromCharCode(item);
//         result.push(obj)
//     })
//
//     return result
// };

const numObj = (arr) => {
    return arr.map((item) => {
        return {
        [item]: String.fromCharCode(item)
        }
    })
};


console.log(numObj([118, 117, 120]), [[{'118': 'v'}], {'117': 'u'}, [{'120': 'x'}]])