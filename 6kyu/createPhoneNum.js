const createPhoneNum = (numbers) => {
    let formatNum = '(xxx) xxx-xxxx';

    numbers.forEach((num) => {
        formatNum = formatNum.replace('x', num);
    })

    return formatNum
};

console.log(createPhoneNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));