const numObj = (char) => {
    const result = [];

    char.forEach((item) => {
        let obj = {};
        obj[item] = String.fromCharCode(item);
        result.push(obj)
    })

    return result
};


console.log(numObj([118, 117, 120]), [[{'118': 'v'}], {'117': 'u'}, [{'120': 'x'}]])