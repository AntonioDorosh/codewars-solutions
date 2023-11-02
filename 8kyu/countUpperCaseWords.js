const countUpperCaseWords = (array) => {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        const el = array[i];

        if (el[0] === el[0].toUpperCase()) {
            result.push(el)
        }
    }

    return result;
};

countUpperCaseWords(['New-York', 'London', 'moscow', 'Dubai'])