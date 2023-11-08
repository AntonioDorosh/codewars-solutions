const getMiddle = (str) => {
    const middle = str.length / 2;

    if (str.length % 2 === 0) {
        return str.slice(middle - 1, middle + 1)
    } else {
        return str.charAt(middle)
    }
};


getMiddle('test') // es